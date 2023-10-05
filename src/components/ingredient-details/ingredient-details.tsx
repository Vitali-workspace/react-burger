import { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { SELECT_INGREDIENT } from "../../services/actions/action-ingredient-details";
import styleDetails from "./ingredient-details.module.css";

interface IIngredientInfo {
  name: string;
  type: string;
  image: string;
  image_mobile: string;
  image_large: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  quantity: number;
  __v: number;
  _id: string;
}


const IngredientDetails: FC = () => {

  const dispatch = useDispatch();
  const { selectedIngredient } = useSelector((state: any) => state.ingredientDetails);

  const { ingredients } = useSelector((state: any) => state.burgerIngredients);
  const { id } = useParams();
  const ingredient = ingredients.find((ingredient: IIngredientInfo) => ingredient._id === id);

  useEffect(() => {
    if (!selectedIngredient && id) {
      dispatch({ type: SELECT_INGREDIENT, selectedIngredient: ingredient });
    }
  }, [selectedIngredient, id, dispatch, ingredient]);

  const { name, calories, carbohydrates, fat, proteins, image_large } = selectedIngredient || {};


  return (ingredient &&
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
    </section>)
  );
}


export default IngredientDetails;