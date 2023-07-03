import styleOrder from "./order-details.module.css"
import iconOrder from "../../images/done.svg";


function OrderDetails() {

  return (
    <div className={styleOrder.container + " mt-15"}>
      <h2 className="text text_type_digits-large mt-8 mb-8">034536</h2>
      <p className="text text_type_main-medium mb-15 pb-1">идентификатор заказа</p>
      <img src={iconOrder} alt="иконка подтверждения" />
      <p className="text text_type_main-default mt-15 pt-3 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
