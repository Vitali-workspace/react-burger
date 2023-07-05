
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .then(data => setListIngredients(data.data))
      .catch(console.error);

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
