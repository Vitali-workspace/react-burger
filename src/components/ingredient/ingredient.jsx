import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleIngredient from "./ingredient.module.css";
import PropTypes from 'prop-types';

function Ingredient(props) {

  function mod() {
    console.log('Запуск модадьного окна');
  }

  return (
    <li className={styleIngredient.card} key={props.data._id} onClick={mod}>
      <span><Counter count={1} size="default" extraClass="m-1" /></span>
      <img src={props.data.image} alt={props.data.name} />
      <span className={styleIngredient.price + " text text_type_digits-default mt-1"}>
        {props.data.price}
        <span className="ml-2"><CurrencyIcon type="primary" /></span>
      </span>
      <p className="text text_type_main-default mt-1">{props.data.name}</p>
    </li>
  );
}

Ingredient.propTypes = {
  "_id": PropTypes.string,
  "name": PropTypes.string,
  "type": PropTypes.string,
  "proteins": PropTypes.number,
  "fat": PropTypes.number,
  "carbohydrates": PropTypes.number,
  "calories": PropTypes.number,
  "price": PropTypes.number,
  "image": PropTypes.string,
  "image_mobile": PropTypes.string,
  "image_large": PropTypes.string,
  "__v": PropTypes.number,
};

export default Ingredient;