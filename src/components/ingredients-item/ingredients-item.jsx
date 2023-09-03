import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { TYPE_DND, ingredientPropTypes } from "../../utils/constants";
import styleItem from './ingredients-item.module.css';


function IngredientsItem({ ingredient, selectItem }) {

  const location = useLocation();
  const { quantity, price, name, image, _id } = ingredient;
  const [, dragRef] = useDrag({ type: TYPE_DND.ITEM_FROM_INGREDIENTS, item: ingredient });


  return (
    <li className={styleItem.card} ref={dragRef} onClick={() => selectItem(ingredient)}>

      <Link className={styleItem.link} to={{ pathname: `/ingredients/${_id}`, state: { fromCardClick: location } }}>
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
      </Link>
    </li>
  );
}


IngredientsItem.propTypes = { ingredient: ingredientPropTypes, selectItem: PropTypes.func };

export default IngredientsItem;