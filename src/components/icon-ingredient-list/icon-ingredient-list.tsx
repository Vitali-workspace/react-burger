import { FC } from "react";
import { IIngredientCount } from "../../services/types/services-types";
import IngredientIcon from "../ingredient-icon/ingredient-icon";
import styleIconList from "./icon-ingredient-list.module.css"


interface IIconList {
  ingredients: IIngredientCount[];
}


const IconIngredientList: FC<IIconList> = ({ ingredients }) => {

  const iconList = ingredients.length > 6 ? ingredients.slice(0, 6) : ingredients;

  const remainder = ingredients.length > 6 ? ingredients.length - 6 : 0;

  return (
    <ul className={styleIconList.container}>
      {
        iconList.map((ingredient, index) => (

          <li key={index}>

            <IngredientIcon
              ingredient={ingredient}
              index={index}
              styleShift={true}
              remainder={remainder}
            />

          </li>
        ))
      }
    </ul>
  )
}


export default IconIngredientList;
