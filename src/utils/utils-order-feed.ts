import { IOrderFeed, IOrder, IIngredientCount } from "../services/types/services-types";


export const checkIngredients = (listId: string[], data: IIngredientCount[]) => {
  const result: IIngredientCount[] = [];

  const ingredients: { [key: string]: number } = {};
  const buns = new Set();

  listId.forEach((id) => {
    const count = ingredients[id];
    if (count) {
      ingredients[id] = count + 1;
    } else {
      ingredients[id] = 1;
    }
  });

  if (data.length) {

    for (let id in ingredients) {
      if (ingredients.hasOwnProperty(id)) {

        data.forEach((ingredient) => {
          if (ingredient._id === id) {
            if (ingredient.type === 'bun') {
              buns.add(id);
              ingredients[id] = 2;
            }
            result.push({ ...ingredient, quantity: ingredients[id] });
          }
        });

      }
    }
  }
  if (buns.size === 1) {
    return result;
  }
  return [];
};


export const checkOrders = (orders: IOrder[], data: IIngredientCount[]) => {
  const validOrders: IOrderFeed[] = [];

  orders.forEach((order) => {

    const { ingredients, ...rest } = order;
    const validIngredients = checkIngredients(order.ingredients, data);

    if (validIngredients.length) {
      validOrders.push({ ...rest, ingredients: validIngredients });
    }
  });

  return validOrders;
};


export const checkStatusOrders = (orders: IOrderFeed[]) => {
  const ready: number[] = [];
  const pending: number[] = [];

  orders.forEach((order) => {
    if (order.status === 'done') {
      ready.push(order.number);
    } else {
      pending.push(order.number);
    }
  });

  return { ready, pending };
};

