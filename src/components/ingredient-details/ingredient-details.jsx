import styleDetails from "./ingredient-details.module.css";
import { useSelector } from "react-redux";


function IngredientDetails() {

  const { selectedIngredient } = useSelector(state => state.ingredientDetails);

  const { name, calories, carbohydrates, fat, proteins, image_large } = selectedIngredient;

  return (
    <section className={styleDetails.container}>
      <h2 className={styleDetails.title + " text text_type_main-large mt-6 ml-10"}>Детали ингредиента</h2>
      <img src={image_large} alt={name} />
      <p className="text text_type_main-medium mt-8 mb-8">{name}</p>

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
    </section>
  )
}


export default IngredientDetails;
