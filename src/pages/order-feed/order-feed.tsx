import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { wsActionConnectionStart } from "../../services/actions/action-web-socket";
import { actionCheckOrders, actionStatusOrders } from "../../services/actions/action-order-feed";
import { checkOrders, checkStatusOrders } from "../../utils/utils-order-feed";
import { WS_URL_ALL_ORDERS } from "../../utils/constants";
import OrderList from "../../components/order-list/order-list";
import FeedStatistics from "../../components/feed-statistics/feed-statistics";
import styleOrderFeed from "./order-feed.module.css"



const OrderFeed: FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsActionConnectionStart(WS_URL_ALL_ORDERS));
  }, [dispatch]);

  const { orders } = useAppSelector((state) => state.webSocket);
  const ingredientsInfo = useAppSelector((state) => state.burgerIngredients.ingredients);

  const validOrders = orders && checkOrders(orders, ingredientsInfo);
  const checkStatus = validOrders && checkStatusOrders(validOrders);

  useEffect(() => {
    if (validOrders && validOrders.length && checkStatus) {
      dispatch(actionCheckOrders(validOrders));
      dispatch(actionStatusOrders(checkStatus));
    }
  });


  return (
    <section className={styleOrderFeed.container + " mt-10"}>
      <div>
        <h2 className="text text_type_main-large">Лента заказов</h2>
        <OrderList orders={validOrders} />
      </div>
      <FeedStatistics />
    </section>
  )

}

export default OrderFeed;
