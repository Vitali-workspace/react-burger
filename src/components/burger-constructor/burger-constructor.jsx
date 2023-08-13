import { useState, useContext } from "react";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styleConstructor from "./burger-constructor.module.css";
import { BurgerConstructorContext } from "../../services/context/burger-constructor-context";


function BurgerConstructor({ itemDom }) {

  const [openPopup, setOpenPopup] = useState(false);
  const constructorContext = useContext(BurgerConstructorContext);

  const list = constructorContext.listIngredients;
  const saucesAndMains = list?.filter((item) => item.type !== "bun");
  const buns = list?.filter((item) => item.type !== "sauce" && item.type !== "main");

  //! функция для наглядного изменения цен
  const randomBun = buns[Math.floor(Math.random() * buns.length)];

  function randomIngredients(saucesAndMains) {
    const randomIndex = Math.floor(Math.random() * saucesAndMains.length);
    saucesAndMains.splice(randomIndex, 1);
    return saucesAndMains;
  }
  randomIngredients(saucesAndMains);


  const totalPrice = (saucesAndMains.reduce((acc, curr) => acc + curr.price, 0)) + randomBun.price * 2;
  console.log(totalPrice + " общая цена"); //!

  function handleOrderClick() {
    setOpenPopup(!openPopup);
  }

  function handleOrderNumber() {
    const listId = [...saucesAndMains, randomBun];
    constructorContext.handleOrder(listId)

    // console.log(constructorContext.getOrderNumber(listId)); //!
  }


  return (
    <section className={styleConstructor.container}>
      <div className="pt-20 mt-5">

        <div className={styleConstructor.menu + " ml-2"}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={randomBun.name + " (верх)"}
            price={randomBun.price}
            thumbnail={randomBun.image}
          />

          <ul className={styleConstructor.list}>
            {
              saucesAndMains.map((item) => {

                return (
                  <li className={styleConstructor.card} key={item._id}>
                    <span className={styleConstructor.buttonDrag}><DragIcon type="primary" /></span>
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </li>
                )
              })
            }
          </ul>

          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={randomBun.name + " (низ)"}
            price={randomBun.price}
            thumbnail={randomBun.image}
          />
        </div>


        <div className={styleConstructor.order + " mt-10 mr-4 pb-15"}>
          <span className={"text text_type_digits-medium mr-10"}>
            {totalPrice}
            <span className="ml-2"><CurrencyIcon type="primary" /></span>
          </span>
          <Button htmlType="button" type="primary" size="large" onClick={() => {
            handleOrderNumber();
            handleOrderClick();
          }}>
            Оформить заказ
          </Button>
        </div>

      </div>

      {
        openPopup &&
        <Modal closePopup={handleOrderClick} pointModal={itemDom}>
          <OrderDetails />
        </Modal>
      }
    </section>
  );
}

BurgerConstructor.propTypes = {
  itemDom: PropTypes.object,
}

export default BurgerConstructor;