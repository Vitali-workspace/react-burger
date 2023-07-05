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
    <li className={styleIngredient.card + " ml-2"}>
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
  data: PropTypes.object,
  handlePopupClick: PropTypes.func,
  list: PropTypes.array,
  stateIngredient: PropTypes.func,
};

export default Ingredient;