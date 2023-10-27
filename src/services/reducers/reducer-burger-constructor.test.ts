import { ADD_INGREDIENT, MOVE_INGREDIENT, REMOVE_INGREDIENT, CLEAR_CONSTRUCTOR, SELECT_BUNS } from "../actions/action-burger-constructor";
import { reducerBurgerConstructor, initialState } from "./reducer-burger-constructor";
import { testKratornayaBun, testElementMain, testElementSauce } from "../../utils/utils-test";


describe("burgerConstructorReducer", () => {

  it("Должен вернуть initialState", () => {
    expect(reducerBurgerConstructor(undefined, {} as any)).toEqual(initialState);
  });

  it("SELECT_BUNS", () => {
    const action = { type: SELECT_BUNS, bun: testKratornayaBun };

    expect(reducerBurgerConstructor(undefined, action)).toEqual({
      ...initialState,
      bun: testKratornayaBun,
    });
  });

  it("ADD_INGREDIENT", () => {
    const action = { type: ADD_INGREDIENT, ingredient: testElementMain };

    expect(reducerBurgerConstructor(undefined, action)).toEqual({
      ...initialState,
      ingredients: [testElementMain],
    });
  });

  it("REMOVE_INGREDIENT", () => {
    const action = { type: REMOVE_INGREDIENT, uuid: testElementMain.uuid };

    expect(reducerBurgerConstructor({
      ...initialState,
      ingredients: [testElementMain],
    }, action)).toEqual({
      ...initialState,
      ingredients: [],
    });
  });

  it("MOVE_INGREDIENT", () => {
    const action = { type: MOVE_INGREDIENT, dragIndex: 0, hoverIndex: 1 };

    expect(reducerBurgerConstructor({
      ...initialState,
      ingredients: [testElementMain, testElementSauce],
    }, action)).toEqual({
      ...initialState,
      ingredients: [testElementSauce, testElementMain],
    });
  });

  it("CLEAR_CONSTRUCTOR", () => {
    const action = { type: CLEAR_CONSTRUCTOR };

    expect(reducerBurgerConstructor({
      ...initialState,
      ingredients: [testElementMain, testElementSauce],
    }, action)).toEqual({
      ...initialState,
      ingredients: [],
    });
  });


});



