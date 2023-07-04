import { useState } from "react";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styleConstructor from "./burger-constructor.module.css";


function BurgerConstructor({ data, itemDom }) {

  const [openPopup, setOpenPopup] = useState(false);

  function handleOrderClick() {
    setOpenPopup(!openPopup);
  }

  return (
    <section className={styleConstructor.container}>
      <div className="pt-20 mt-5">

        <div className={styleConstructor.menu + " ml-2"}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={data[0].image}
          />

          <ul className={styleConstructor.list}>
            <li className={styleConstructor.card}>
              <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
              <ConstructorElement
                text="Соус традиционный галактический"
                price={300}
                thumbnail={data[8].image}
              />
            </li>

            <li className={styleConstructor.card}>
              <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
              <ConstructorElement
                text="Мясо бессмертных моллюсков Protostomia"
                price={30}
                thumbnail={data[5].image}
              />
            </li>

            <li className={styleConstructor.card}>
              <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
              <ConstructorElement
                text="Плоды Фалленианского дерева"
                price={80}
                thumbnail={data[11].image}
              />
            </li>

            <li className={styleConstructor.card}>
              <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={80}
                thumbnail={data[10].image}
              />
            </li>

            <li className={styleConstructor.card}>
              <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={80}
                thumbnail={data[10].image}
              />
            </li>

            <li className={styleConstructor.card}>
              <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={80}
                thumbnail={data[10].image}
              />
            </li>
          </ul>

          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail={data[0].image}
          />
        </div>


        <div className={styleConstructor.order + " mt-10 mr-4 pb-15"}>
          <span className={"text text_type_digits-medium mr-10"}>
            {'1200'}
            <span className="ml-2"><CurrencyIcon type="primary" /></span>
          </span>
          <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
            Оформить заказ
          </Button>
        </div>

      </div>

      {openPopup &&
        <>
          <Modal handleCloseClick={handleOrderClick} pointModal={itemDom}>
            <OrderDetails />
          </Modal>
        </>}
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array,
  itemDom: PropTypes.object,
}

export default BurgerConstructor;