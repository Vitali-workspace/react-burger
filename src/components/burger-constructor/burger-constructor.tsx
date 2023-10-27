import { useMemo, FC, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorMenu from "../constructor-menu/constructor-menu";
import ConstructorBun from "../constructor-bun/constructor-bun";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { actionRemoveIngredient, actionSelectBuns, actionAddIngredient } from "../../services/actions/action-burger-constructor";
import { actionDecreaseIngredient, actionIncreaseIngredient, actionReplaceBun } from "../../services/actions/action-burger-ingredients";
import { actionOrderDetails } from "../../services/actions/action-order-details";
import { actionClearQuantity } from "../../services/actions/action-burger-ingredients";
import { actionClearConstructor } from "../../services/actions/action-burger-constructor";
import { v4 as uuid } from "uuid";
import { TYPE_BUN, TYPE_DND, TYPE_INGREDIENT } from "../../utils/constants";
import { IIngredientConstructor } from "../../services/types/services-types";
import { AppThunkAction } from "../../services/types/services-types";
import icon from "../../images/gem.svg"
import styleConstructor from "./burger-constructor.module.css";


const BurgerConstructor: FC = () => {

  const [buttonText, setButtonText] = useState("Оформить заказ");
  const [isDisabled, setIsDisabled] = useState(false);

  function handleTimer() {
    setButtonText("Ждите формирование заказа");
    setIsDisabled(true);

    setTimeout(() => {
      setButtonText("Оформить заказ");
      setIsDisabled(false);
    }, 16000);
  }

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const { bun } = useAppSelector((state) => state.burgerConstructor);
  const { isAuthorized } = useAppSelector((state) => state.pages);
  const constructorIngredients = useAppSelector((state) => state.burgerConstructor.ingredients);

  const [, dropTargetRef] = useDrop({
    accept: TYPE_DND.ITEM_FROM_INGREDIENTS,
    drop(ingredient: IIngredientConstructor) {
      handleOnDrop(ingredient);
    }
  });

  const totalPrice = useMemo(() => {
    return constructorIngredients.reduce((sumPrice: number, current: IIngredientConstructor) => {
      if (current.price) {
        return sumPrice + current.price;
      }
      return sumPrice;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [bun, constructorIngredients]);


  function handleDeleteClick(uuid: string, _id: string) {
    dispatch(actionRemoveIngredient(uuid));
    dispatch(actionDecreaseIngredient(_id));
  }

  function buttonOrderClick() {
    if (isAuthorized) {
      if (bun !== null) {
        const listOrderId = [bun._id, ...constructorIngredients.map((ingredient: IIngredientConstructor) => ingredient._id), bun._id];
        dispatch(actionOrderDetails(listOrderId) as AppThunkAction);
        dispatch(actionClearQuantity());
        dispatch(actionClearConstructor());
        handleTimer();
      }
    } else {
      navigation("/login");
    }
  }

  function handleOnDrop(ingredient: IIngredientConstructor) {
    const { type, _id } = ingredient;

    switch (type) {
      case TYPE_INGREDIENT.BUN: {
        dispatch(actionReplaceBun(_id));
        dispatch(actionSelectBuns(ingredient));
        break;
      }
      default: {
        dispatch(actionIncreaseIngredient(_id));
        dispatch(actionAddIngredient({ ...ingredient, uuid: uuid() }));
        break;
      }
    }
  }


  return (
    <section className={`${styleConstructor.container} mt-25`} ref={dropTargetRef}>

      <ul className={`${styleConstructor.list}`} data-test="constructor">
        {<ConstructorBun type={TYPE_BUN.TOP} />}
        <ConstructorMenu deleteIngredients={handleDeleteClick} />
        {<ConstructorBun type={TYPE_BUN.BOTTOM} />}
      </ul>

      <div className={`${styleConstructor.block} mt-10 mr-4`}>
        <span className={`text text_type_digits-medium mr-10 ${styleConstructor.price}`}>
          {totalPrice}
          <img className={styleConstructor.image} src={icon} alt="валюта" />
        </span>

        <Button htmlType="button" onClick={buttonOrderClick} type="primary" disabled={!bun || isDisabled} size="large">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}


export default BurgerConstructor;