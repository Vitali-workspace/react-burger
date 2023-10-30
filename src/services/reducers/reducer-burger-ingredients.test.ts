import { reducerBurgerIngredients, initialState } from "./reducer-burger-ingredients";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_SUCCESS,
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT,
  CLEAR_QUANTITY,
  REPLACE_BUN,
  SELECT_TAB,
} from "../actions/action-burger-ingredients";
import {
  testKratornayaBun,
  testFluorescentBun,
  testIngredientMain,
  testIngredientSauce,
  testIngredients
} from "../../utils/utils-test";


describe("reducerBurgerIngredients", () => {

  it("Должен вернуть initialState", () => {
    expect(reducerBurgerIngredients(undefined, {} as any)).toEqual({
      ...initialState,
    });
  });

  it("GET_INGREDIENTS_REQUEST", () => {
    const action = { type: GET_INGREDIENTS_REQUEST };

    expect(reducerBurgerIngredients(undefined, action)).toEqual({
      ...initialState,
      ingredientsRequest: true,
    });
  });

  it("GET_INGREDIENTS_SUCCESS", () => {
    const action = {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: testIngredients,
    };

    expect(reducerBurgerIngredients(undefined, action)).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsError: false,
      ingredients: testIngredients,
    });
  });

  it("GET_INGREDIENTS_ERROR", () => {
    const action = { type: GET_INGREDIENTS_ERROR };

    expect(reducerBurgerIngredients(undefined, action)).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsError: true,
      ingredients: [],
    });
  });

  it("REPLACE_BUN", () => {
    const action = { type: REPLACE_BUN, _id: testFluorescentBun._id };

    expect(reducerBurgerIngredients({
      ...initialState,
      ingredients: [{ ...testKratornayaBun, quantity: 2 }, testFluorescentBun]
    }, action)).toEqual({
      ...initialState,
      ingredients: [testKratornayaBun, { ...testFluorescentBun, quantity: 2 }]
    });
  });

  it("INCREASE_INGREDIENT", () => {
    const action = { type: INCREASE_INGREDIENT, _id: testIngredientMain._id };

    expect(reducerBurgerIngredients({
      ...initialState,
      ingredients: [testIngredientMain, testIngredientSauce]
    }, action)).toEqual({
      ...initialState,
      ingredients: [{ ...testIngredientMain, quantity: 1 }, testIngredientSauce],
    });
  });

  it("DECREASE_INGREDIENT", () => {
    const action = { type: DECREASE_INGREDIENT, _id: testIngredientMain._id };

    expect(reducerBurgerIngredients({
      ...initialState,
      ingredients: [{ ...testIngredientMain, quantity: 1 }, testIngredientSauce]
    }, action)).toEqual({
      ...initialState,
      ingredients: [{ ...testIngredientMain, quantity: 0 }, testIngredientSauce],
    });
  });

  it("CLEAR_QUANTITY", () => {
    const action = { type: CLEAR_QUANTITY };

    expect(reducerBurgerIngredients({
      ...initialState,
      ingredients: [{ ...testIngredientMain, quantity: 5 }, { ...testIngredientSauce, quantity: 3 }]
    }, action)).toEqual({
      ...initialState,
      ingredients: [{ ...testIngredientMain, quantity: 0 }, { ...testIngredientSauce, quantity: 0 }],
    });
  });

  it("SELECT_TAB", () => {
    const action = { type: SELECT_TAB, tab: "tab" };

    expect(reducerBurgerIngredients(undefined, action)).toEqual({
      ...initialState,
      tab: "tab",
    });
  });
});

