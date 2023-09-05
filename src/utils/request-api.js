import { BASE_URL } from "./constants";
import { token } from "../services/actions/action-login";
import { getCookie } from "./cookie-api";


class requestApi {

  _checkError(response) {
    console.log(response)
    if (!response.ok) {
      return Promise.reject(`произошла ошибка: ${response.status}`);
    }
    return response.json();
  }


  updateToken() {
    return fetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: localStorage.getItem(token.refresh) }),
    }).then(this._checkError);
  }

  fetchWithRefresh = async (url, options) => {
    try {
      const res = await fetch(url, options);
      return await this._checkError(res);
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await this.updateToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //повторяем запрос
        return await this._checkError(res);
      } else {
        return Promise.reject(err);
      }
    }
  };


  registration({ name, email, password }) {
    return fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkError);
  }

  login({ email, password }) {
    return fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(this._checkError);
  }

  logout() {
    return fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: localStorage.getItem(token.refresh) }),
    }).then(this._checkError);
  }


  getOrderNumber(listId) {
    return fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "ingredients": listId }),
    }).then(this._checkError);
  }

  getIngredients() {
    return fetch(`${BASE_URL}/ingredients`, {
      method: "GET"
    }).then(this._checkError);
  }


  getUserInfo() {
    return this.fetchWithRefresh(`${BASE_URL}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      },
    }).then(this._checkError);
  }


  updateUserInfo({ name, email, password }) {
    return this.fetchWithRefresh(`${BASE_URL}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkError);
  }


  resetPassword({ token, password }) {
    return this.fetchWithRefresh(`${BASE_URL}/password-reset/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    }).then(this._checkError);
  }


  forgotPassword({ email }) {
    return fetch(`${BASE_URL}/password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).then(this._checkError);
  }

}

const api = new requestApi(BASE_URL);

export default api;