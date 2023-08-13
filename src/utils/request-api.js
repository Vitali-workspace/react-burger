import { API_URL, API_URL_ORDER } from "./constants";

class requestApi {

  getOrderNumber(listId) {
    return fetch(API_URL_ORDER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "ingredients": listId }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .then(data => data)
      .catch(console.error);
  }

  getIngredients(setListIngredients) {
    return fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .then(res => setListIngredients(res.data))
      .catch(console.error);
  }

}

const api = new requestApi(API_URL, API_URL_ORDER);

export default api;