import { FC } from "react";
import { IOrderFeed } from "../../services/types/services-types";
import OrderElement from "../order-element/order-element";
import styleList from "./order-list.module.css"

interface IOrderList { orders: IOrderFeed[] }


const OrderList: FC<IOrderList> = ({ orders }) => {

  const lastTenOrders = orders.slice(-10);

  return (
    <ul className={`${styleList.list} custom-scroll`} >
      {
        lastTenOrders.map((order) => (
          <OrderElement order={order} key={order._id} />
        ))
      }
    </ul>
  )

}

export default OrderList;