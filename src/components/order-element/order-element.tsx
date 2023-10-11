import { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IOrderFeed } from "../../services/types/services-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch } from "../../services/hooks/services-hooks";
import IconIngredientList from "../icon-ingredient-list/icon-ingredient-list";
import { actionSelectFeedOrder } from "../../services/actions/action-order-feed";
import { formatDateOrder } from "../../utils/format-date-order";
import styleOrder from "./order-element.module.css"


interface TOrderList { order: IOrderFeed }


const OrderElement: FC<TOrderList> = ({ order }) => {

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { number, ingredients, status, createdAt, name, _id } = order;
  const priceBurger = useMemo(() => ingredients.reduce((sumPrice, current) => sumPrice + current.price * current.quantity, 0), [ingredients]);
  const dateCreationBurger = useMemo(() => formatDateOrder(createdAt), [createdAt]);

  const burgerStatus = (status: string) => {
    switch (status) {
      case "created": {
        return <span className={`text text_type_main-small ${styleOrder.created}`}>Создан</span>
      }
      case "pending": {
        return <span className={`text text_type_main-small ${styleOrder.pending}`}>Готовится</span>
      }
      case "done": {
        return <span className={`text text_type_main-small ${styleOrder.done}`}>Выполнен</span>
      }
      default: {
        return <span className={`text text_type_main-small ${styleOrder.cancel}`}>Отменён</span>
      }
    }
  }

  function showOrderInfo() {
    navigate(`${location.pathname}/${_id}`, { state: { orderElement: location } });
    dispatch(actionSelectFeedOrder(order) as any);
  }

  return (
    <li className={styleOrder.container + " mt-10 p-6"} onClick={showOrderInfo}>

      <div className={styleOrder.header}>
        <p className="text text_type_digits-default">{`#${number}`}</p>
        <time className="text text_type_main-default text_color_inactive">{dateCreationBurger}</time>
      </div>

      <h2 className="text text_type_main-medium mt-6 mb-3">{name}</h2>
      {location.pathname === "/profile/orders" && burgerStatus(status)}

      <div className={styleOrder.footer}>
        <IconIngredientList ingredients={ingredients} />

        <div className={`text text_type_digits-default ${styleOrder.price}`}>
          {priceBurger}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )

}

export default OrderElement;