import { useRef } from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { MOVE_INGREDIENT } from "../../services/actions/action-burger-constructor";
import { TYPE_DND, ingredientPropTypes } from "../../utils/constants";
import stylesItem from "./constructor-item.module.css";


function ConstructorItem({ ingredient, index, deleteIngredients }) {

  const dispatch = useDispatch();
  const { name, price, image, uuid, _id } = ingredient;

  const elementRef = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: TYPE_DND.ITEM_FROM_CONSTRUCTOR,
    item: () => {
      return { uuid, index }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, dropRef] = useDrop({
    accept: TYPE_DND.ITEM_FROM_CONSTRUCTOR,
    hover: (item, monitor) => {
      if (!elementRef.current) {
        return
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return
      }

      const cursorPosition = elementRef.current.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      const hoverMiddleY = (cursorPosition.bottom - cursorPosition.top) / 2;
      const hoverClientY = clientOffset.y - cursorPosition.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      dispatch({
        type: MOVE_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });

      item.index = hoverIndex;
    }
  });

  dragRef(dropRef(elementRef));

  return (
    <li className={`${stylesItem.ingredient} ${isDragging && stylesItem.drag}`} ref={elementRef}>
      <DragIcon type={"primary"} />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => deleteIngredients(uuid, _id)}
      />
    </li>
  );
}

ConstructorItem.propTypes = {
  ingredient: ingredientPropTypes,
  index: PropTypes.number,
  deleteIngredients: PropTypes.func,
};

export default ConstructorItem;