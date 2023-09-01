import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Routes } from "react-router-dom";
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
import Profile from "../../pages/profile/profile";

import PageNotFound from "../../pages/page-not-found/page-not-found";
import { getIngredients } from "../../services/actions/action-burger-ingredients";
import { CLOSE_MODAL_INGREDIENT_DETAILS, REJECT_INGREDIENT } from "../../services/actions/action-ingredient-details";
import { CLOSE_MODAL_ORDER_DETAILS } from "../../services/actions/action-order-details";
import styleApp from "./app.module.css";


function App() {

  const dispatch = useDispatch();
  const modalOrderDetails = useSelector(state => state.orderDetails.openModal);
  const modalIngredientDetails = useSelector(state => state.ingredientDetails.openModal);

  function closeModalOrderDetails() {
    dispatch({ type: CLOSE_MODAL_ORDER_DETAILS });
  }

  function closeModalIngredientDetails() {
    dispatch({ type: CLOSE_MODAL_INGREDIENT_DETAILS });
    dispatch({ type: REJECT_INGREDIENT });
  }

  useEffect(() => { dispatch(getIngredients()) }, [dispatch]);


  return (
    <div>
      <AppHeader />
      <main className={styleApp.content}>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            }
          />

          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/reset-password" exact element={<ResetPassword />} />

          {/* <ProtectedRouteElement loggedIn={true}> */}
          <Route path="/profile" exact element={<Profile />} />
          {/* </ProtectedRouteElement> */}

          <Route path="/ingredients/:id" exact element={''} />
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
        modalIngredientDetails && (
          <Modal closePopup={closeModalIngredientDetails}>
            <IngredientDetails />
          </Modal>
        )
      }

    </div>
  );
}

export default App;
