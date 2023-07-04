import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleIngredient from "./ingredient.module.css";
import PropTypes from 'prop-types';

function Ingredient(props) {

  function findIngredient(event) {
    const urlCard = event.target;
    const listIngredient = props.list;
    const foundOIngredient = listIngredient.find(obj => obj.image === urlCard.src);
    props.stateIngredient(foundOIngredient);
    props.handlePopupClick();
  }

  return (
    <li className={styleIngredient.card + " ml-2"} key={props.data._id}>
      <span className={styleIngredient.count}>
        <Counter count={1} size="default" extraClass="m-1" />
      </span>
      <img
        className={styleIngredient.picture}
        src={props.data.image}
        alt={props.data.name}
        onClick={findIngredient}
      />
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
  handlePopupClick: PropTypes.func,
  list: PropTypes.array,
  stateIngredient: PropTypes.func,
};

export default Ingredient;