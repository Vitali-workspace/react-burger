import { FC } from "react";
import OrderList from "../../components/order-list/order-list";
import FeedStatistics from "../../components/feed-statistics/feed-statistics";
import styleOrderFeed from "./order-feed.module.css"


const OrderFeed: FC = () => {

  return (
    <section className={styleOrderFeed.container + " mt-10"}>
      <div>
        <h2 className="text text_type_main-large">Лента заказов</h2>
        <OrderList />
      </div>
      <FeedStatistics />
    </section>
  )

}

export default OrderFeed;
