import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styleDetails from "./ingredient-page.module.css";


function IngredientPage() {

  return (
    <section className={styleDetails.container}>
      <IngredientDetails />
    </section>
  )
}

export default IngredientPage;
