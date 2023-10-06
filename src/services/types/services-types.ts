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