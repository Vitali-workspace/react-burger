import { FC } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { TYPE_DND } from "../../utils/constants";
import styleItem from './ingredients-item.module.css';

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
  ingredient: IIngredientInfo;
  selectItem: (ingredient: IIngredientInfo) => void;
}


const IngredientsItem: FC<IList> = ({ ingredient, selectItem }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const { quantity, price, name, image } = ingredient;
  const [, dragRef] = useDrag({ type: TYPE_DND.ITEM_FROM_INGREDIENTS, item: ingredient });

  const showIngredientDetails = (ingredient: IIngredientInfo) => {
    navigate(`/ingredients/${ingredient._id}`, {
      state: { background: location },
    });
  };


  return (
    <li className={styleItem.card} ref={dragRef} onClick={() => selectItem(ingredient)}>

      <div className={styleItem.link}
        onClick={() => {
          const selection = window.getSelection();
          if (selection !== null && selection.toString() === "") {
            showIngredientDetails(ingredient);
          }
        }}
      >

        <div className={styleItem.container}>
          {!!quantity && <Counter count={quantity} size="default" />}

          <img className="ml-4 mr-4" src={image} alt={name} />

          <div className={styleItem.caption}>
            <div className={`${styleItem.price} mt-1 mb-1`}>
              <p className="text text_type_digits-default">{price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${styleItem.title}`}>{name}</p>
          </div>
        </div>
      </div>
    </li>
  );
}


export default IngredientsItem;