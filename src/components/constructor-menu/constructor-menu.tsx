import { FC } from "react";
import ConstructorItem from "../constructor-item/constructor-item";
import { useAppSelector } from "../../services/hooks/services-hooks";
import { IIngredientConstructor } from "../../services/types/services-types";
import stylesConstructorMenu from "./constructor-menu.module.css";


interface IConstructorMenu {
  deleteIngredients: (_id: string, uuid: string) => void;
}


const ConstructorMenu: FC<IConstructorMenu> = ({ deleteIngredients }) => {

  const { ingredients } = useAppSelector((state) => state.burgerConstructor);

  return (
    <div className={`${stylesConstructorMenu.menu} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient: IIngredientConstructor, index: number) => {
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
