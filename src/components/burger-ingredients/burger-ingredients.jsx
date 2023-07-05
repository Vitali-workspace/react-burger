import { useState } from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Ingredient from "../ingredient/ingredient";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import styleIngredients from "./burger-ingredients.module.css";


function BurgerIngredients({ data, itemDom }) {

  const listBuns = data.filter((item) => item.type === "bun");
  const listSauces = data.filter((item) => item.type === "sauce");
  const listMains = data.filter((item) => item.type === "main");
  const [current, setCurrent] = useState('Булки');
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  function handlePopupClick() {
    setOpenPopup(!openPopup);
  }

  return (
    <section className={styleIngredients.container + " mr-8 pr-4"}>
      <div>
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
              {listBuns.map((item) => (
                <Ingredient
                  key={item._id}
                  data={item}
                  handlePopupClick={handlePopupClick}
                  list={listBuns}
                  stateIngredient={setSelectedIngredient}
                />
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
            <ul className={styleIngredients.list}>
              {listSauces.map((item) => (
                <Ingredient
                  key={item._id}
                  data={item}
                  handlePopupClick={handlePopupClick}
                  list={listSauces}
                  stateIngredient={setSelectedIngredient}
                />
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
            <ul className={styleIngredients.list}>
              {listMains.map((item) => (
                <Ingredient
                  key={item._id}
                  data={item}
                  handlePopupClick={handlePopupClick}
                  list={listMains}
                  stateIngredient={setSelectedIngredient}
                />
              ))}
            </ul>
          </div>

        </div>
      </div>

      {
        openPopup &&
        <Modal closePopup={handlePopupClick} pointModal={itemDom}>
          <IngredientDetails ingredientInfo={selectedIngredient} />
        </Modal>
      }
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array,
  itemDom: PropTypes.object,
}

export default BurgerIngredients;
