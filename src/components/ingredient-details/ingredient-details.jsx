import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate } from 'react-router-dom'
import { SELECT_INGREDIENT } from "../../services/actions/action-ingredient-details";
import styleDetails from "./ingredient-details.module.css";


function IngredientDetails() {

  const dispatch = useDispatch();
  const { selectedIngredient } = useSelector(state => state.ingredientDetails);

  const { ingredients } = useSelector(state => state.burgerIngredients);
  const { id } = useParams();

  useEffect(() => {
    if (!selectedIngredient && id && ingredients) {

      const ingredient = ingredients.find((ingredient) => ingredient._id === id);
      dispatch({ type: SELECT_INGREDIENT, selectedIngredient: ingredient });
    }
  }, [selectedIngredient, id, ingredients, dispatch]);

  const { name, calories, carbohydrates, fat, proteins, image_large } = selectedIngredient || {};


  return (selectedIngredient ?
    (<section className={styleDetails.container}>
      <h2 className={styleDetails.title + " text text_type_main-large mt-6 ml-10"}>Детали ингредиента</h2>
      <img src={image_large} alt={name} />
      <p className="text text_type_main-medium mt-5 mb-8">{name}</p>

      <ul className={styleDetails.list + " mb-10"}>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Калории,ккал</span>
          <p className={"text text_type_digits-default pt-2"}>{calories}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Белки, г</span>
          <p className="text text_type_digits-default pt-2">{proteins}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Жиры, г</span>
          <p className="text text_type_digits-default pt-2">{fat}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Углеводы, г</span>
          <p className="text text_type_digits-default pt-2">{carbohydrates}</p>
        </li>
      </ul>
    </section>) : (<Navigate to="/"></Navigate>)
  );
}


export default IngredientDetails;
