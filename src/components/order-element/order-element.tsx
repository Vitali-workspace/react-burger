import { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import icon from "../../images/gem.svg"
import styleOrder from "./order-element.module.css"


const OrderElement: FC = () => {

  return (
    <li className={styleOrder.container + " mt-10 p-6"}>
      <div className={styleOrder.header}>
        <p className="text text_type_digits-default">{'#034535'}</p>
        <time className="text text_type_main-default text_color_inactive">{'Сегодня, 16:20'}</time>
      </div>

      <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
      {/* <p>Создан</p> */}

      <div className={styleOrder.footer}>
        {/* компонент иконок */}
        <img className={styleOrder.test} src={icon} alt="тест картинка" />

        <div className={`text text_type_digits-default ${styleOrder.price}`}>
          {'100'}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )

}

export default OrderElement;