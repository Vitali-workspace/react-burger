import { FC } from "react";
import IngredientsItem from "../ingredients-item/ingredients-item";
import styleList from "./ingredients-list.module.css";

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
  uuid?: string;
}

interface IList {
  ingredients: Array<IIngredientInfo>;
  selectItem: (ingredient: IIngredientInfo) => void;
}


const IngredientsList: FC<IList> = ({ ingredients, selectItem }) => {

  return (
    <ul className={`${styleList.list} mt-6 mb-10 ml-4 mr-4`}>
      {
        ingredients.map((ingredient) => {
          const { _id } = ingredient;
          return (
            <IngredientsItem
              ingredient={ingredient}
              key={_id}
              selectItem={selectItem}
            />
          )
        })
      }
    </ul>
  );
}


export default IngredientsList;