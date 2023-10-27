import { IIngredientCount, IIngredientConstructor, IOrderFeed } from "../services/types/services-types";


export const testKratornayaBun: IIngredientCount = {
  "_id": "60666c42cc7b410027a1a9b1",
  "name": "Краторная булка N-200i",
  "type": "bun",
  "proteins": 80,
  "fat": 24,
  "carbohydrates": 53,
  "calories": 420,
  "price": 1255,
  "image": "https://code.s3.yandex.net/react/code/bun-02.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
  "__v": 0,
  "quantity": 0,
}

export const testFluorescentBun: IIngredientCount = {
  "_id": "60666c42cc7b410027a1a9b2",
  "name": "Флюоресцентная булка R2-D3",
  "type": "bun",
  "proteins": 44,
  "fat": 26,
  "carbohydrates": 85,
  "calories": 643,
  "price": 988,
  "image": "https://code.s3.yandex.net/react/code/bun-01.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
  "__v": 0,
  "quantity": 0,
}

export const testElementMain: IIngredientConstructor = {
  "_id": "60666c42cc7b410027a1a9bc",
  "name": "Плоды Фалленианского дерева",
  "type": "main",
  "proteins": 20,
  "fat": 5,
  "carbohydrates": 55,
  "calories": 77,
  "price": 874,
  "image": "https://code.s3.yandex.net/react/code/sp_1.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
  "__v": 0,
  "uuid": "1xx1",
  "index": 1,
}

export const testElementSauce: IIngredientConstructor = {
  "_id": "60666c42cc7b410027a1a9b8",
  "name": "Соус фирменный Space Sauce",
  "type": "sauce",
  "proteins": 50,
  "fat": 22,
  "carbohydrates": 11,
  "calories": 14,
  "price": 80,
  "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  "__v": 0,
  "uuid": "2xx2",
  "index": 2,
}

export const testIngredientMain: IIngredientCount = {
  "_id": "60666c42cc7b410027a1a9b5",
  "name": "Говяжий метеорит (отбивная)",
  "type": "main",
  "proteins": 800,
  "fat": 800,
  "carbohydrates": 300,
  "calories": 2674,
  "price": 3000,
  "image": "https://code.s3.yandex.net/react/code/meat-04.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
  "__v": 0,
  "quantity": 0,
}

export const testIngredientSauce: IIngredientCount = {
  "_id": "60666c42cc7b410027a1a9ba",
  "name": "Соус с шипами Антарианского плоскоходца",
  "type": "sauce",
  "proteins": 101,
  "fat": 99,
  "carbohydrates": 100,
  "calories": 100,
  "price": 88,
  "image": "https://code.s3.yandex.net/react/code/sauce-01.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-01-large.png",
  "__v": 0,
  "quantity": 0,
}

export const testOrder = {
  _id: "653bf4de52b4cf001d86df88",
  ingredients: [
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa0940",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093c"
  ],
  status: "done",
  name: "Антарианский краторный бессмертный бургер",
  createdAt: "2023-10-19T18:32:08.337Z",
  updatedAt: "2023-10-27T17:35:26.902Z",
  number: 22333,
};

export const testOrderStat = {
  success: true,
  orders: [testOrder],
  total: 22323,
  totalToday: 79,
};

export const testOrderFeed: IOrderFeed = {
  _id: "653bf4de52b4cf001d86df88",
  status: "done",
  name: "Био-марсианский метеоритный краторный бургер",
  createdAt: "2023-10-19T18:32:08.337Z",
  updatedAt: "2023-10-27T17:35:26.902Z",
  number: 22303,
  ingredients: [
    {
      "_id": "60666c42cc7b410027a1a9b1",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0,
      "quantity": 2,
    },
    {
      "_id": "60666c42cc7b410027a1a9b5",
      "name": "Говяжий метеорит (отбивная)",
      "type": "main",
      "proteins": 800,
      "fat": 800,
      "carbohydrates": 300,
      "calories": 2674,
      "price": 3000,
      "image": "https://code.s3.yandex.net/react/code/meat-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
      "__v": 0,
      "quantity": 3,
    },
    {
      "_id": "60666c42cc7b410027a1a9b6",
      "name": "Биокотлета из марсианской Магнолии",
      "type": "main",
      "proteins": 420,
      "fat": 142,
      "carbohydrates": 242,
      "calories": 4242,
      "price": 424,
      "image": "https://code.s3.yandex.net/react/code/meat-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
      "__v": 0,
      "quantity": 1,
    }
  ]
};

export const testIngredients: IIngredientCount[] = [testIngredientMain, testIngredientSauce];

