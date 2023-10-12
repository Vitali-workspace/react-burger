import { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { WS_URL_PROFILE_ORDERS, WS_URL_ALL_ORDERS } from "../../utils/constants";
import { wsActionConnectionStart } from "../../services/actions/action-web-socket";
import { actionSelectFeedOrder } from "../../services/actions/action-order-feed";
import { getCookie } from "../../utils/cookie-api";
import { formatDateOrder } from "../../utils/format-date-order";
import { IOrderFeed } from "../../services/types/services-types";
import styleOrderInfo from "./page-order-info.module.css"


const PageOrderInfo: FC = () => {

  const dispatch = useAppDispatch();
  const location = useLocation();

  const token = { access: "accessToken", refresh: "refreshToken" };
  const cookie = getCookie(token.access);
  const accessToken = cookie && cookie.split(' ')[1];
  const wsSwitchUrl = location.pathname === "/feed/:id" ? WS_URL_ALL_ORDERS : WS_URL_PROFILE_ORDERS + `?token=${accessToken}`;

  useEffect(() => {
    dispatch(wsActionConnectionStart(wsSwitchUrl));
  }, [dispatch]);


  const { orders } = useAppSelector((state => state.oderFeed));
  const { selectedOrder } = useAppSelector((state) => state.oderFeed);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (!selectedOrder && id && orders) {
      const order = orders.find((order: IOrderFeed) => order._id === id);
      order && dispatch(actionSelectFeedOrder(order) as any);
    }
  }, [selectedOrder, id, orders, dispatch]);


  const { number, name, status, ingredients, createdAt } = selectedOrder!;

  const checkDateCreation = createdAt && formatDateOrder(createdAt);
  const priceBurger = ingredients && ingredients.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);


  const burgerStatus = (status: string) => {
    switch (status) {
      case "created": {
        return <span className={`text text_type_main-default mt-3 mb-15`}>Создан</span>
      }
      case "pending": {
        return <span className={`text text_type_main-default mt-3 mb-15`}>Готовится</span>
      }
      case "done": {
        return <span className={`text text_type_main-default mt-3 mb-15 ${styleOrderInfo.done}`}>Выполнен</span>
      }
      default: {
        return <span className={`text text_type_main-default mt-3 mb-15 ${styleOrderInfo.cancel}`}>Отменён</span>
      }
    }
  }



  return (
    <section className={styleOrderInfo.container + " mt-30"} >
      <h2 className={styleOrderInfo.number + " text text_type_digits-default mb-10"}>{`#${number}`}</h2>
      <h3 className="text text_type_main-medium">{name}</h3>
      {burgerStatus(status)}
      <p className="text text_type_main-medium">Состав:</p>

      <ul className={styleOrderInfo.list + " custom-scroll"}>
        {
          ingredients.map((ingredient, index) => (

            <li key={index}>
              <div className={styleOrderInfo.block}>
                <div className={styleOrderInfo.header}>
                  <div className={styleOrderInfo.layer}>
                    <img className={styleOrderInfo.image} src={ingredient.image_mobile} alt="иконка ингредиента" />
                  </div>

                  <h4 className="text text_type_main-default ml-4">{ingredient.name}</h4>
                </div>
                <div className={`text text_type_digits-default ml-4 ${styleOrderInfo.price}`}>
                  {`${ingredient.quantity} x ${ingredient.price}`}
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </li>
          ))
        }
      </ul>

      <div className={styleOrderInfo.footer + " mb-15"}>
        <time className="text text_type_main-default text_color_inactive">{checkDateCreation}</time>
        <div className={`text text_type_digits-default ${styleOrderInfo.price}`}>
          {priceBurger}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )

}

export default PageOrderInfo;