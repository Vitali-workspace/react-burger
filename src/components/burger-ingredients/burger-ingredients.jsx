import { useMemo, useRef } from "react";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";
import IngredientsList from "../ingredients-list/ingredients-list";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_TAB } from "../../services/actions/action-burger-ingredients";
import { OPEN_MODAL_INGREDIENT_DETAILS, selectIngredient } from "../../services/actions/action-ingredient-details";
import { TYPE_INGREDIENT, CONFIG_SCROLL, NAMES_INGREDIENTS } from "../../utils/constants";
import styleIngredients from "./burger-ingredients.module.css"


function BurgerIngredients() {

  const dispatch = useDispatch();
  const { ingredients } = useSelector(state => state.burgerIngredients);

  const listBuns = useMemo(() => ingredients.filter((ingredient) => ingredient.type === TYPE_INGREDIENT.BUN), [ingredients]);
  const listMains = useMemo(() => ingredients.filter((ingredient) => ingredient.type === TYPE_INGREDIENT.MAIN), [ingredients]);
  const listSauces = useMemo(() => ingredients.filter((ingredient) => ingredient.type === TYPE_INGREDIENT.SAUCE), [ingredients]);

  const refBun = useRef(null);
  const refMain = useRef(null);
  const refSauce = useRef(null);

  function handleClickIngredient(ingredient) {
    dispatch(selectIngredient(ingredient));
    dispatch({ type: OPEN_MODAL_INGREDIENT_DETAILS });
  }

  function handleClickTab(tab) {
    dispatch({ type: SELECT_TAB, tab });

    switch (tab) {
      case NAMES_INGREDIENTS.SAUCE:
        refSauce.current.scrollIntoView(CONFIG_SCROLL);
        break;
      case NAMES_INGREDIENTS.BUN:
        refBun.current.scrollIntoView(CONFIG_SCROLL);
        break;
      case NAMES_INGREDIENTS.MAIN:
        refMain.current.scrollIntoView(CONFIG_SCROLL);
        break;
      default:
        break;
    }
  }

  function scrolling(evt) {

    const scroll = evt.target.scrollTop;
    const scrollMain = refMain.current.getBoundingClientRect().top - refBun.current.getBoundingClientRect().top;
    const scrollSauce = refSauce.current.getBoundingClientRect().top - refBun.current.getBoundingClientRect().top;

    if (scroll >= scrollMain) {
      dispatch({ type: SELECT_TAB, tab: NAMES_INGREDIENTS.MAIN });
    } else if (scroll < scrollSauce) {
      dispatch({ type: SELECT_TAB, tab: NAMES_INGREDIENTS.BUN });
    } else {
      dispatch({ type: SELECT_TAB, tab: NAMES_INGREDIENTS.SAUCE });
    }
  }


  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <IngredientsTabs tabClick={handleClickTab} />
      <div className={`${styleIngredients.container} custom-scroll mt-10 pr-2`} onScroll={scrolling}>
        <p className="text text_type_main-medium" ref={refBun}>{NAMES_INGREDIENTS.BUN}</p>
        <IngredientsList ingredients={listBuns} selectItem={handleClickIngredient} />
        <p className="text text_type_main-medium" ref={refSauce}>{NAMES_INGREDIENTS.SAUCE}</p>
        <IngredientsList ingredients={listSauces} selectItem={handleClickIngredient} />
        <p className="text text_type_main-medium" ref={refMain}>{NAMES_INGREDIENTS.MAIN}</p>
        <IngredientsList ingredients={listMains} selectItem={handleClickIngredient} />
      </div>
    </section>
  );
}


export default BurgerIngredients;
