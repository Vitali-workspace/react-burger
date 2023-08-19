import PropTypes from "prop-types";
import ConstructorItem from "../constructor-item/constructor-item";
import { useSelector } from "react-redux";
import stylesConstructorMenu from "./constructor-menu.module.css"


function ConstructorMenu({ deleteIngredients }) {

  const { ingredients } = useSelector(state => state.burgerConstructor);

  return (
    <div className={`${stylesConstructorMenu.menu} custom-scroll pr-2`}>
      {
        ingredients.map((ingredient, index) => {
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

ConstructorMenu.propTypes = { deleteIngredients: PropTypes.func };

export default ConstructorMenu;