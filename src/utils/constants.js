import PropTypes from "prop-types";

export const API_URL = "https://norma.nomoreparties.space/api";
export const API_AUTH = "https://norma.nomoreparties.space/api/auth";


export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  uuid: PropTypes.string,
});


export const TYPE_BUN = {
  TOP: "top",
  BOTTOM: "bottom",
};

export const TYPE_DND = {
  ITEM_FROM_CONSTRUCTOR: "ITEM_FROM_CONSTRUCTOR",
  ITEM_FROM_INGREDIENTS: "ITEM_FROM_INGREDIENTS",
};

export const NAMES_INGREDIENTS = {
  BUN: "Булки",
  SAUCE: "Соусы",
  MAIN: "Начинки",
};

export const TYPE_INGREDIENT = {
  NOT_BUN: "ingredient",
  BUN: "bun",
  MAIN: "main",
  SAUCE: "sauce",
};

export const CONFIG_SCROLL = {
  behavior: "smooth",
  block: "start",
};
