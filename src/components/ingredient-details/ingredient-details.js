import PropTypes from 'prop-types';
import styleDetails from "./ingredient-details.module.css"

function IngredientDetails({ ingredientInfo }) {

  return (
    <section className={styleDetails.container}>
      <h2 className={styleDetails.title + " text text_type_main-large mt-6 ml-10"}>Детали ингредиента</h2>
      <img src={ingredientInfo.image_large} alt="картинка ингредиента" />
      <p className="text text_type_main-medium mt-8 mb-8">{ingredientInfo.name}</p>

      <ul className={styleDetails.list + " mb-10"}>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Калории,ккал</span>
          <p className={"text text_type_digits-default pt-2"}>{ingredientInfo.calories}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Белки, г</span>
          <p className="text text_type_digits-default pt-2">{ingredientInfo.proteins}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Жиры, г</span>
          <p className="text text_type_digits-default pt-2">{ingredientInfo.fat}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Углеводы, г</span>
          <p className="text text_type_digits-default pt-2">{ingredientInfo.carbohydrates}</p>
        </li>
      </ul>
    </section>
  );
}

IngredientDetails.propTypes = {
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

export default IngredientDetails;
