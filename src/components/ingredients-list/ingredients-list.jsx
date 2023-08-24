import PropTypes from 'prop-types';
import IngredientsItem from "../ingredients-item/ingredients-item";
import { ingredientPropTypes } from "../../utils/constants";
import styleList from "./ingredients-list.module.css";


function IngredientsList({ ingredients, selectItem }) {
  return (
    <ul className={`${styleList.list} mt-6 mb-10 ml-4 mr-4`}>
      {
        ingredients.map((ingredient) => {
          const { _id } = ingredient;
          return (
            <IngredientsItem
              ingredient={ingredient}
              key={_id}
              count={1}
              selectItem={selectItem}
            />
          )
        })
      }
    </ul>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
  selectItem: PropTypes.func,
};

export default IngredientsList;