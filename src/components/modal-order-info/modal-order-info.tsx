import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { formatDateOrder } from "../../utils/format-date-order";
import { IOrderFeed } from "../../services/types/services-types";
import { actionSelectFeedOrder } from "../../services/actions/action-order-feed";
import { testBurger } from "../../utils/constants";
import { IIngredientConstructor } from "../../services/types/services-types";
import styleOrderInfo from "./modal-order-info.module.css";



const ModalOrderInfo: FC = () => {

  const dispatch = useAppDispatch();

  const { orders } = useAppSelector((state) => state.orderFeed);
  const { selectedOrder } = useAppSelector((state) => state.orderFeed);
  const { id } = useParams<{ id?: string }>();
  //const { orders } = useAppSelector((state) => state.webSocket);

  //console.log(orders, 'ордер из ws');

  if (selectedOrder !== null) {
    localStorage.setItem("StorageOrder", JSON.stringify(selectedOrder));
  }

  const savedStorageOrder = localStorage.getItem("StorageOrder");
  const saveOrder = savedStorageOrder ? JSON.parse(savedStorageOrder) : {};

  const { number, name, status, ingredients, createdAt } = saveOrder; //! testBurger
  const checkDateCreation = createdAt && formatDateOrder(createdAt);
  const priceBurger = ingredients && ingredients.reduce((sumPrice: number, current: IIngredientConstructor) => sumPrice + current.quantity! * current.price, 0);


  useEffect(() => {
    if (!selectedOrder && orders) {
      const saveOrder = orders.find((order: IOrderFeed) => order._id === id);
      saveOrder && dispatch(actionSelectFeedOrder(saveOrder));
    }
  }, [selectedOrder, id, orders, dispatch]);


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
          ingredients.map((ingredient: any, index: any) => (

            <li key={ingredient._id}>
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

export default ModalOrderInfo;