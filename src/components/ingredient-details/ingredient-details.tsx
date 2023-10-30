import { useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { useParams } from 'react-router-dom'
import { actionSelectIngredient } from "../../services/actions/action-ingredient-details";
import { IIngredientCount } from "../../services/types/services-types";
import styleDetails from "./ingredient-details.module.css";


const IngredientDetails: FC = () => {

  const dispatch = useAppDispatch();
  const { selectedIngredient } = useAppSelector((state) => state.ingredientDetails);

  const { ingredients } = useAppSelector((state) => state.burgerIngredients);
  const { id } = useParams();
  const ingredient = ingredients.find((ingredient: IIngredientCount) => ingredient._id === id);

  useEffect(() => {
    if (!selectedIngredient && id) {
      if (ingredient !== undefined)
        dispatch(actionSelectIngredient(ingredient));
    }
  }, [selectedIngredient, id, dispatch, ingredient]);

  const { name, calories, carbohydrates, fat, proteins, image_large } = selectedIngredient || {};

  if (!ingredient) {
    return null;
  }

  return (ingredient &&
    (<section className={styleDetails.container}>
      <h2 className={styleDetails.title + " text text_type_main-large mt-6 ml-10"}>Детали ингредиента</h2>
      <img src={image_large} alt={name} data-cy="element-image" />
      <p className="text text_type_main-medium mt-5 mb-8" data-cy="element-name">{name}</p>

      <ul className={styleDetails.list + " mb-10"}>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Калории,ккал</span>
          <p className={"text text_type_digits-default pt-2"} data-cy="element-calories">{calories}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Белки, г</span>
          <p className="text text_type_digits-default pt-2" data-cy="element-proteins">{proteins}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Жиры, г</span>
          <p className="text text_type_digits-default pt-2" data-cy="element-fat">{fat}</p>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          <span className={styleDetails.block}>Углеводы, г</span>
          <p className="text text_type_digits-default pt-2" data-cy="element-carbohydrates">{carbohydrates}</p>
        </li>
      </ul>
    </section>)
  );
}


export default IngredientDetails;
