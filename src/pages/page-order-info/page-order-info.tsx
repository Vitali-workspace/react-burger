import { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleOrderInfo from "./page-order-info.module.css"
import iconTest from "../../images/testi.png"


const PageOrderInfo: FC = () => {

  return (
    <section className={styleOrderInfo.container + " mt-30"} >
      <h2 className={styleOrderInfo.number + " text text_type_digits-default mb-10"}>{'#034533'}</h2>
      <h3 className="text text_type_main-medium">{'Black Hole Singularity острый бургер'}</h3>
      <span className={styleOrderInfo.status + " text text_type_main-default mt-3 mb-15"}>Выполнен</span>
      <p className="text text_type_main-medium">Состав:</p>
      <ul className={styleOrderInfo.list}>
        <li>
          <div className={styleOrderInfo.block}>

            <div className={styleOrderInfo.header}>
              <img className={styleOrderInfo.image} src={iconTest} alt="тест" />
              <h4 className="text text_type_main-default ml-4">Флюоресцентная булка R2-D3</h4>
            </div>
            <div className={`text text_type_digits-default ml-4 ${styleOrderInfo.price}`}>
              {'2 x 20'}
              <CurrencyIcon type="primary" />
            </div>

          </div>
        </li>

        <li>
          <div className={styleOrderInfo.block}>

            <div className={styleOrderInfo.header}>
              <img className={styleOrderInfo.image} src={iconTest} alt="тест" />
              <h4 className="text text_type_main-default ml-4">Филе Люминесцентного тетраодонтимформа</h4>
            </div>
            <div className={`text text_type_digits-default ml-4 ${styleOrderInfo.price}`}>
              {'2 x 20'}
              <CurrencyIcon type="primary" />
            </div>

          </div>
        </li>

        <li>
          <div className={styleOrderInfo.block}>

            <div className={styleOrderInfo.header}>
              <img className={styleOrderInfo.image} src={iconTest} alt="тест" />
              <h4 className="text text_type_main-default ml-4">Флюоресцентная булка R2-D3</h4>
            </div>
            <div className={`text text_type_digits-default ml-4 ${styleOrderInfo.price}`}>
              {'2 x 20'}
              <CurrencyIcon type="primary" />
            </div>

          </div>
        </li>

        <li>
          <div className={styleOrderInfo.block}>

            <div className={styleOrderInfo.header}>
              <img className={styleOrderInfo.image} src={iconTest} alt="тест" />
              <h4 className="text text_type_main-default ml-4">Флюоресцентная булка R2-D3</h4>
            </div>
            <div className={`text text_type_digits-default ml-4 ${styleOrderInfo.price}`}>
              {'2 x 20'}
              <CurrencyIcon type="primary" />
            </div>

          </div>
        </li>
        {/* компонент иконок */}
      </ul>

      <div className={styleOrderInfo.footer}>
        <time className="text text_type_main-default text_color_inactive">{'Вчера, 13:50'}</time>
        <div className={`text text_type_digits-default ${styleOrderInfo.price}`}>
          {'510'}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )

}

export default PageOrderInfo;