import { FC } from "react";
import { IIngredientCount } from "../../services/types/services-types";
import styleIcon from "./ingredient-icon.module.css"

interface IIngredientIcon {
  ingredient: IIngredientCount;
  index: number;
  remainder?: number;
  styleShift?: boolean;
}


const IngredientIcon: FC<IIngredientIcon> = ({ ingredient, index, styleShift, remainder }) => {

  const styleOverlayIcon = styleShift ? { zIndex: 6 - index, marginRight: -16 } : { zIndex: 1 };

  return (
    <div className={styleIcon.container} style={styleOverlayIcon}>
      <img className={styleIcon.icon} src={ingredient.image_mobile} alt={ingredient.name} />
      {
        !!remainder && index === 5 && (
          <span className={`${styleIcon.count} text text_type_digits-default`}>{`+${remainder}`}</span>
        )
      }
    </div>
  )
}


export default IngredientIcon;
