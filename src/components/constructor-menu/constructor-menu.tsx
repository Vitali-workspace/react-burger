import { FC } from "react";
import ConstructorItem from "../constructor-item/constructor-item";
import { useSelector } from "react-redux";
import stylesConstructorMenu from "./constructor-menu.module.css"

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
  uuid: string;
}

interface IConstructorMenu {
  deleteIngredients: (_id: string, uuid: string) => void;
}


const ConstructorMenu: FC<IConstructorMenu> = ({ deleteIngredients }) => {

  const { ingredients } = useSelector((state: any) => state.burgerConstructor);

  return (
    <div className={`${stylesConstructorMenu.menu} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient: IIngredientInfo, index: number) => {
          const { uuid } = ingredient;
          return (
            <ConstructorItem
              ingredient={ingredient}
              index={index}
              key={uuid}
              deleteIngredients={deleteIngredients}
            />
          );
        })
      }
    </div>
  );
}


export default ConstructorMenu;