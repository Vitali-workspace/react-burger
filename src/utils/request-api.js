import { API_URL, API_AUTH } from "./constants";
import { token } from "../services/actions/action-login";
import { getCookie } from "./cookie-api";


class requestApi {

  registration({ name, email, password }) {
    return fetch(`${API_AUTH}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }

  login({ email, password }) {
    return fetch(`${API_AUTH}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }

  logout() {
    return fetch(`${API_AUTH}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: localStorage.getItem(token.refresh) }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }

  updateToken() {
    return fetch(`${API_AUTH}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: localStorage.getItem(token.refresh) }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }


  getOrderNumber(listId) {
    return fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "ingredients": listId }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }

  getIngredients() {
    return fetch(`${API_URL}/ingredients`, {
      method: "GET"
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }


  getUserInfo() {
    return fetch(`${API_AUTH}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }


  updateUserInfo({ name, email, password }) {
    return fetch(`${API_AUTH}/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }


  resetPassword({ token, password }) {
    return fetch(`${API_URL}/password-reset/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }


  forgotPassword({ email }) {
    return fetch(`${API_URL}/password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`произошла ошибка: ${response.status}`);
      })
      .catch(console.error);
  }


}

const api = new requestApi(API_URL);

export default api;