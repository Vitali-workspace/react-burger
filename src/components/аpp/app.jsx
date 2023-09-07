import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import HiddenRoute from "../hidden-route/hidden-route";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import Profile from "../../pages/profile/profile";
import { getUser, refreshToken } from "../../services/actions/action-profile";
import PageNotFound from "../../pages/page-not-found/page-not-found";
import { getIngredients } from "../../services/actions/action-burger-ingredients";
import { CLOSE_MODAL_INGREDIENT_DETAILS, REJECT_INGREDIENT } from "../../services/actions/action-ingredient-details";
import { CLOSE_MODAL_ORDER_DETAILS } from "../../services/actions/action-order-details";
import { getCookie } from "../../utils/cookie-api";
import styleApp from "./app.module.css";




function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const modalOrderDetails = useSelector(state => state.orderDetails.openModal);
  let background = location.state && location.state.background;


  function closeModalOrderDetails() {
    dispatch({ type: CLOSE_MODAL_ORDER_DETAILS });
  }

  function closeModalIngredientDetails() {
    dispatch({ type: CLOSE_MODAL_INGREDIENT_DETAILS });
    dispatch({ type: REJECT_INGREDIENT });
    navigate(-1);
  }

  useEffect(() => {
    const checkToken = getCookie("accessToken");
    dispatch(getIngredients());

    if (checkToken) {
      dispatch(refreshToken())
      dispatch(getUser());
    }
  }, [dispatch]);


  return (
    <div>
      <AppHeader />
      <main className={styleApp.content}>

        <Routes location={background || location} >

          <Route
            exact
            path="/"
            element={
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            }
          />

          <Route path="/" element={<HiddenRoute />}>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement>
                <Profile />
              </ProtectedRouteElement>
            } />


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
