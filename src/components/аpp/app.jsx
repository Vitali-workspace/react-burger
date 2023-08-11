
import { useState, useEffect } from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styleApp from "./app.module.css"
import API_URL from '../../utils/constants';
import { BurgerConstructorContext } from '../../services/context/burger-constructor-context';

const modalRoot = document.getElementById('root');
const API_URL_ORDER = "https://norma.nomoreparties.space/api/orders"; //! test


function App() {

  const [listIngredients, setListIngredients] = useState([]);
  const [statusOrder, setStatusOrder] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .then(data => setListIngredients(data.data))
      .catch(console.error);
  }, []);


  function getOrderNumber(listId) {
    console.log(listId)
    return fetch(API_URL_ORDER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "ingredients": listId }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .then(data => setStatusOrder(data))
      .catch(console.error);
  }

  return (
    <div>
      <AppHeader />
      <main className={styleApp.content}>
        <BurgerConstructorContext.Provider value={{ listIngredients, getOrderNumber, statusOrder }}>
          {/* <BurgerIngredients data={listIngredients} itemDom={modalRoot} /> */}
          {
            listIngredients.length > 0 &&
            <BurgerConstructor itemDom={modalRoot} />
          }
        </BurgerConstructorContext.Provider>
      </main>
    </div>
  );
}

export default App;
