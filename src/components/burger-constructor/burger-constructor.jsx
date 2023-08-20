import { useMemo } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorMenu from "../constructor-menu/constructor-menu";
import ConstructorBun from "../constructor-bun/constructor-bun";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { REPLACE_BUN, INCREASE_INGREDIENT, DECREASE_INGREDIENT } from "../../services/actions/action-burger-ingredients";
import { REMOVE_INGREDIENT, ADD_INGREDIENT, SELECT_BUNS } from "../../services/actions/action-burger-constructor";
import { actionOrderDetails } from "../../services/actions/action-order-details";
import { v4 as uuid } from "uuid";
import { TYPE_BUN, TYPE_DND, TYPE_INGREDIENT } from "../../utils/constants";
import icon from "../../images/gem.svg"
import styleConstructor from "./burger-constructor.module.css";


function BurgerConstructor() {

  const dispatch = useDispatch();
  const { bun } = useSelector(state => state.burgerConstructor);
  const constructorIngredients = useSelector(state => state.burgerConstructor.ingredients);

  const [, dropTargetRef] = useDrop({
    accept: TYPE_DND.ITEM_FROM_INGREDIENTS,
    drop(ingredient) {
      handleOnDrop(ingredient);
    }
  });

  const totalPrice = useMemo(() => {
    return constructorIngredients.reduce((sumPrice, current) => {
      if (current.price) {
        return sumPrice + current.price;
      }
      return sumPrice;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [bun, constructorIngredients]);


  function handleDeleteClick(uuid, _id) {
    dispatch({ type: REMOVE_INGREDIENT, uuid: uuid });
    dispatch({ type: DECREASE_INGREDIENT, _id: _id });
  }

  function buttonOrderClick() {
    const listOrderId = [bun._id, ...constructorIngredients.map((ingredient) => ingredient._id), bun._id];
    dispatch(actionOrderDetails(listOrderId));
  }

  function handleOnDrop(ingredient) {
    const { type, _id } = ingredient;

    switch (type) {
      case TYPE_INGREDIENT.BUN: {
        dispatch({ type: REPLACE_BUN, _id: _id });
        dispatch({ type: SELECT_BUNS, bun: ingredient });
        break;
      }
      default: {
        dispatch({ type: INCREASE_INGREDIENT, _id: _id });
        dispatch({ type: ADD_INGREDIENT, ingredient: { ...ingredient, uuid: uuid() } });
        break;
      }
    }
  }


  return (
    <section className={`${styleConstructor.container} mt-25`} ref={dropTargetRef}>

      <ul className={`${styleConstructor.list}`}>
        {<ConstructorBun type={TYPE_BUN.TOP} />}
        <ConstructorMenu deleteIngredients={handleDeleteClick} />
        {<ConstructorBun type={TYPE_BUN.BOTTOM} />}
      </ul>

      <div className={`${styleConstructor.block} mt-10 mr-4`}>
        <span className={`text text_type_digits-medium mr-10 ${styleConstructor.price}`}>
          {totalPrice}
          <img className={styleConstructor.image} src={icon} alt="валюта" />
        </span>

        <Button htmlType="button" onClick={buttonOrderClick} type="primary" disabled={!bun} size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}


export default BurgerConstructor;