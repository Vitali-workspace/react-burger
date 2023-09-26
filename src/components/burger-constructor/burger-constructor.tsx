import { useMemo, FC } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
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

interface IIngredientInfo {
  name: string;
  type: string;
  image: string;
  image_mobile: string;
  image_large: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  quantity: number;
  __v: number;
  _id: string;
  uuid?: string;
}


const BurgerConstructor: FC = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { bun } = useSelector((state: any) => state.burgerConstructor);
  const { isAuthorized } = useSelector((state: any) => state.pages);
  const constructorIngredients = useSelector((state: any) => state.burgerConstructor.ingredients);

  const [, dropTargetRef] = useDrop({
    accept: TYPE_DND.ITEM_FROM_INGREDIENTS,
    drop(ingredient: IIngredientInfo) {
      handleOnDrop(ingredient);
    }
  });

  const totalPrice = useMemo(() => {
    return constructorIngredients.reduce((sumPrice: number, current: IIngredientInfo) => {
      if (current.price) {
        return sumPrice + current.price;
      }
      return sumPrice;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [bun, constructorIngredients]);


  function handleDeleteClick(uuid: string, _id: string) {
    dispatch({ type: REMOVE_INGREDIENT, uuid: uuid });
    dispatch({ type: DECREASE_INGREDIENT, _id: _id });
  }

  function buttonOrderClick() {
    if (isAuthorized) {
      const listOrderId = [bun._id, ...constructorIngredients.map((ingredient: IIngredientInfo) => ingredient._id), bun._id];
      dispatch(actionOrderDetails(listOrderId) as any);
    } else {
      navigation("/login");
    }
  }

  function handleOnDrop(ingredient: IIngredientInfo) {
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