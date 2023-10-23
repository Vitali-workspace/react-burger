import { FC } from "react";
import { useLocation } from "react-router-dom";
import { IOrderFeed } from "../../services/types/services-types";
import OrderElement from "../order-element/order-element";
import styleList from "./order-list.module.css"

interface IOrderList { orders: IOrderFeed[] }


const OrderList: FC<IOrderList> = ({ orders }) => {

  const location = useLocation();
  const resizeStyle = (location.pathname === "/feed") ? styleList.block : "";

  return (
    <ul className={`${styleList.list} custom-scroll ${resizeStyle}`} >
      {
        orders.map((order) => (
          <OrderElement order={order} key={order._id} />
        ))
      }
    </ul>
  )

}

export default OrderList;