import { reducerIngredientDetails, initialState } from "./reducer-ingredient-details";
import {
  REJECT_INGREDIENT,
  SELECT_INGREDIENT,
  CLOSE_MODAL_INGREDIENT_DETAILS,
  OPEN_MODAL_INGREDIENT_DETAILS,
} from "../actions/action-ingredient-details";
import { testIngredientMain } from "../../utils/utils-test";


describe("reducerIngredientDetails", () => {

  it("initialState", () => {
    expect(reducerIngredientDetails(undefined, {} as any)).toEqual(initialState);
  });

  it("SELECT_INGREDIENT", () => {
    const action = {
      type: SELECT_INGREDIENT,
      selectedIngredient: testIngredientMain,
    };

    expect(reducerIngredientDetails(undefined, action)).toEqual({
      ...initialState,
      selectedIngredient: testIngredientMain,
    });
  });

  it("REJECT_INGREDIENT", () => {
    const action = { type: REJECT_INGREDIENT };

    expect(reducerIngredientDetails(undefined, action)).toEqual({
      ...initialState,
      selectedIngredient: null,
    });
  });

  it("OPEN_MODAL_INGREDIENT_DETAILS", () => {
    const action = { type: OPEN_MODAL_INGREDIENT_DETAILS };

    expect(reducerIngredientDetails(undefined, action)).toEqual({
      ...initialState,
      openModal: true,
    });
  });

  it("CLOSE_MODAL_INGREDIENT_DETAILS", () => {
    const action = { type: CLOSE_MODAL_INGREDIENT_DETAILS };

    expect(reducerIngredientDetails(undefined, action)).toEqual({
      ...initialState,
      openModal: false,
    });
  });
});
