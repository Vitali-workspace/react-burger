import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
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
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
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
