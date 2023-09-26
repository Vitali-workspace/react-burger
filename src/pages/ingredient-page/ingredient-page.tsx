import { FC } from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styleDetails from "./ingredient-page.module.css";


const IngredientPage: FC = () => {

  return (
    <section className={styleDetails.container}>
      <IngredientDetails />
    </section>
  )
}

export default IngredientPage;
