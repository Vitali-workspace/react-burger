
import { useState, useEffect } from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styleApp from "./app.module.css"
import API_URL from '../../utils/constants';

const modalRoot = document.getElementById('root');


function App() {

  const [listIngredients, setListIngredients] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setListIngredients(data.data))
      .catch((res) => {
        if (!res.ok) {
          return Promise.reject(`произошла ошибка: ${res.status}`);
        }
        return res.json();
      });
  }, []);


  return (
    <div>
      <AppHeader />
      <main className={styleApp.content}>
        <BurgerIngredients data={listIngredients} itemDom={modalRoot} />
        {
          listIngredients.length > 0 &&
          <BurgerConstructor data={listIngredients} itemDom={modalRoot} />
        }
      </main>
    </div>
  );
}

export default App;
