import { useState } from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredient/ingredient";
import styleIngredients from "./burger-ingredients.module.css";


function BurgerIngredients({ data }) {

  const listBuns = data.filter((item) => item.type === "bun");
  const listSauces = data.filter((item) => item.type === "sauce");
  const listMains = data.filter((item) => item.type === "main");
  const [current, setCurrent] = useState('Булки');

  return (
    <section className={styleIngredients.container + " mr-10"}>
      <div className={styleIngredients.block}>
        <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

        <div className={styleIngredients.tab}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>

        <div className={styleIngredients.content + " mt-10"}>
          <div>
            <h2 className="text text_type_main-medium pb-6">Булки</h2>
            <ul className={styleIngredients.list}>
              {listBuns.map((item) => <Ingredient key={item._id} data={item} />)}
            </ul>
          </div>

          <div>
            <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
            <ul className={styleIngredients.list}>
              {listSauces.map((item) => <Ingredient key={item._id} data={item} />)}
            </ul>
          </div>

          <div>
            <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
            <ul className={styleIngredients.list}>
              {listMains.map((item) => <Ingredient key={item._id} data={item} />)}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
