import { useRef, FC } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { MOVE_INGREDIENT } from "../../services/actions/action-burger-constructor";
import { TYPE_DND } from "../../utils/constants";
import stylesItem from "./constructor-item.module.css";

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
  index?: number;
}

interface IConstructorItem {
  ingredient: IIngredientInfo;
  index: number;
  deleteIngredients: (_id: string, uuid: string) => void;
}


const ConstructorItem: FC<IConstructorItem> = ({ ingredient, index, deleteIngredients }) => {

  const dispatch = useDispatch();
  const { name, price, image, uuid, _id } = ingredient;

  const elementRef = useRef<HTMLLIElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: TYPE_DND.ITEM_FROM_CONSTRUCTOR,
    item: () => {
      return { uuid, index }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, dropRef] = useDrop({
    accept: TYPE_DND.ITEM_FROM_CONSTRUCTOR,
    hover: (item: IIngredientInfo, monitor) => {
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

      if (clientOffset && dragIndex) {
        const hoverClientY = clientOffset.y - cursorPosition.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
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


export default ConstructorItem;