import { FC } from "react";
import OrderElement from "../order-element/order-element"; //! Для теста
import styleList from "./order-list.module.css"


const OrderList: FC = () => {

  return (
    <ul className={`${styleList.list} custom-scroll`} >
      <OrderElement />
      <OrderElement />
      <OrderElement />
      <OrderElement />
    </ul>
  )

}

export default OrderList;