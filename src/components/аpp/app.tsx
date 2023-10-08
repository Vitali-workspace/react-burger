import { useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import Profile from "../../pages/profile/profile";
import OrderFeed from "../../pages/order-feed/order-feed";
import ProfileHistory from "../../pages/profile-history/profile-history";
import PageNotFound from "../../pages/page-not-found/page-not-found";
import { getUser, refreshToken } from "../../services/actions/action-profile";
import { getIngredients } from "../../services/actions/action-burger-ingredients";
import { getCookie } from "../../utils/cookie-api";
import { actionCloseModalOrder } from "../../services/actions/action-order-details";
import { actionRejectIngredient, actionCloseModalDetails } from "../../services/actions/action-ingredient-details";
import styleApp from "./app.module.css";



const App: FC = () => {

  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const modalOrderDetails = useAppSelector((state) => state.orderDetails.openModal);
  let background = location.state && location.state.background;


  function closeModalOrderDetails() {
    dispatch(actionCloseModalOrder());
  }

  function closeModalIngredientDetails() {
    dispatch(actionCloseModalDetails());
    dispatch(actionRejectIngredient());
    navigate(-1);
  }

  useEffect(() => {
    const checkToken = getCookie("accessToken");
    dispatch(getIngredients() as any);

    if (checkToken) {
      dispatch(refreshToken() as any);
      dispatch(getUser() as any);
    }
  }, [dispatch]);


  return (
    <div>
      <AppHeader />
      <main className={styleApp.content}>

        <Routes location={background || location} >

          <Route
            path="/"
            element={
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            }
          />

          <Route path="login"
            element={<ProtectedRouteElement anonymous={true}>
              <Login />
            </ProtectedRouteElement>} />
          <Route path="register"
            element={<ProtectedRouteElement anonymous={true}>
              <Register />
            </ProtectedRouteElement>} />
          <Route path="forgot-password"
            element={<ProtectedRouteElement anonymous={true}>
              <ForgotPassword />
            </ProtectedRouteElement>} />
          <Route path="reset-password"
            element={<ProtectedRouteElement anonymous={true}>
              <ResetPassword />
            </ProtectedRouteElement>} />

          <Route path="profile"
            element={<ProtectedRouteElement anonymous={false}>
              <Profile />
            </ProtectedRouteElement>}>
          </Route>

          <Route path="profile/orders"
            element={<ProtectedRouteElement anonymous={false}>
              <ProfileHistory />
            </ProtectedRouteElement>}>
          </Route>

          {/* <Route path="profile/orders/:id"
            element={<ProtectedRouteElement anonymous={false}>
              <></>
            </ProtectedRouteElement>}>
          </Route> */}

          <Route path="feed" element={<OrderFeed />} />

          {/* <Route path="feed/:id" element={ <></>} /> */}

          <Route path="/ingredients/:id" element={<IngredientPage />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </main>

      {
        modalOrderDetails && (
          <Modal closePopup={closeModalOrderDetails}>
            <OrderDetails />
          </Modal>
        )
      }

      {
        background && (
          <Routes>
            <Route path="/ingredients/:id"
              element={
                <Modal closePopup={closeModalIngredientDetails}>
                  <IngredientDetails />
                </Modal>
              } />
          </Routes>
        )
      }

    </div>
  );
}

export default App;
