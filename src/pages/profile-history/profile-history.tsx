import { FC, useEffect } from "react";
import OrderList from "../../components/order-list/order-list";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { getCookie } from "../../utils/cookie-api";
import { WS_URL_PROFILE_ORDERS } from "../../utils/constants";
import { wsActionConnectionStart } from "../../services/actions/action-web-socket";
import { actionCheckOrders } from "../../services/actions/action-order-feed";
import { checkOrders } from "../../utils/utils-order-feed";
import styleHistory from "./profile-history.module.css"


const ProfileHistory: FC = () => {

  const dispatch = useAppDispatch();

  const token = { access: "accessToken", refresh: "refreshToken" };
  const tokenCookie = getCookie(token.access);
  const accessToken = tokenCookie && tokenCookie.split(' ')[1];
  const wsUrl = WS_URL_PROFILE_ORDERS + `?token=${accessToken}`;

  const { orders } = useAppSelector((state) => state.webSocket);
  const ingredientsInfo = useAppSelector((state) => state.burgerIngredients.ingredients);

  const validOrders = orders && checkOrders(orders, ingredientsInfo).reverse();

  useEffect(() => {
    dispatch(wsActionConnectionStart(wsUrl));
  }, [dispatch]);

  useEffect(() => {
    if (validOrders && validOrders.length) {
      dispatch(actionCheckOrders(validOrders) as any);
    }
  });

  if (!validOrders) {
    return (
      <p className={`text text_type_main-large text_color_inactive`}>Список ордеров пуст</p>
    )
  }

  return (
    <section className={styleHistory.container} >
      <OrderList orders={validOrders} />
    </section>
  )

}

export default ProfileHistory;
