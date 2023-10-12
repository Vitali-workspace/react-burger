import { BASE_URL } from "./constants";
import { token } from "../services/actions/action-login";
import { getCookie } from "./cookie-api";

interface IForm {
  name?: string;
  email: string;
  password?: string;
}

interface IResetPassword {
  token: string;
  password: string;
}


class RequestApi {

  BASE_URL: string;

  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }

  _checkError(response: Response) {
    if (!response.ok) {
      return Promise.reject(`${response.status}`);
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


  registration({ name, email, password }: IForm) {
    return fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkError);
  }

  login({ email, password }: IForm) {
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


  getOrderNumber(listId: number[]) {
    return fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      } as HeadersInit,
      body: JSON.stringify({ "ingredients": listId }),
    }).then(this._checkError);
  }

  getIngredients() {
    return fetch(`${BASE_URL}/ingredients`, {
      method: "GET"
    }).then(this._checkError);
  }


  getUserInfo() {
    return fetch(`${BASE_URL}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      } as HeadersInit,
    }).then(this._checkError);
  }


  updateUserInfo({ name, email, password }: IForm) {
    return fetch(`${BASE_URL}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie(token.access),
      } as HeadersInit,
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkError);
  }


  resetPassword({ token, password }: IResetPassword) {
    return fetch(`${BASE_URL}/password-reset/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    }).then(this._checkError);
  }


  forgotPassword({ email }: IForm) {
    return fetch(`${BASE_URL}/password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).then(this._checkError);
  }

}

const api = new RequestApi(BASE_URL);

export default api;