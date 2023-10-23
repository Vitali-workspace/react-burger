import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TActionsBurgerConstructor } from "../actions/action-burger-constructor";
import { TActionsBurgerIngredients } from "../actions/action-burger-ingredients";
import { TActionsForgotPassword } from "../actions/action-forgot-password";
import { TActionsIngredientDetails } from "../actions/action-ingredient-details";
import { TActionsLogin } from "../actions/action-login";
import { TActionsOrderDetails } from "../actions/action-order-details";
import { TActionsProfile } from "../actions/action-profile";
import { TActionsRegister } from "../actions/action-register";
import { TActionsResetPassword } from "../actions/action-reset-password";
import { TActionsFeed } from '../actions/action-order-feed';
import { store } from "../store";

import { TActionsWebSocket } from '../actions/action-web-socket';


export type TActionsApp =
  | TActionsBurgerConstructor
  | TActionsBurgerIngredients
  | TActionsForgotPassword
  | TActionsIngredientDetails
  | TActionsLogin
  | TActionsOrderDetails
  | TActionsProfile
  | TActionsRegister
  | TActionsResetPassword
  | TActionsFeed
  | TActionsWebSocket;


export type TActionsPages =
  | TActionsForgotPassword
  | TActionsLogin
  | TActionsProfile
  | TActionsRegister
  | TActionsResetPassword;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TActionsApp>;

export type AppThunkAction<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, RootState, Action<any>, TActionsApp>>;

export type TBun = IIngredientInfo | null;

export interface IIngredientInfo {
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
  __v: number;
  _id: string;
  quantity?: number;
  uuid?: string;
}

export interface IIngredientCount extends IIngredientInfo {
  quantity: number;
}

export interface IIngredientConstructor extends IIngredientInfo {
  uuid: string;
  index: number;
}

export interface IOrder {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TOrders = IOrder[];

export interface IResponseOrders {
  success: boolean;
  orders: TOrders;
  total: number;
  totalToday: number;
}

export interface IForm {
  name?: string;
  email: string;
  password: string;
}

export interface IFormEmail {
  email: string;
}

export interface IFormStorage {
  name: string;
  email: string;
  password: string;
}

export interface IResetPassword {
  password: string;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IFocus {
  name: boolean;
  email: boolean;
  password: boolean;
}


export interface IOrderFeed {
  ingredients: IIngredientCount[];
  _id: string;
  status: string;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export interface IStatusOrdersFeed {
  ready: number[];
  pending: number[];
}


