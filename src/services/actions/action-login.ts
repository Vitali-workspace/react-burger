import RequestApi from "../../utils/request-api";
import { setCookie } from "../../utils/cookie-api";

export const LOGIN_SUBMIT_REQUEST = "LOGIN_SUBMIT_REQUEST";
export const LOGIN_SUBMIT_ERROR = "LOGIN_SUBMIT_ERROR";
export const LOGIN_SUBMIT_SUCCESS = "LOGIN_SUBMIT_SUCCESS";

export const token = { access: "accessToken", refresh: "refreshToken" };


export function login(info: any) {

  return function (dispatch: any) {
    dispatch({ type: LOGIN_SUBMIT_REQUEST });

    RequestApi.login(info)
      .then((data) => {
        dispatch({ type: LOGIN_SUBMIT_SUCCESS, user: data.user });

        setCookie(token.access, data.accessToken, info);
        localStorage.setItem(token.refresh, data.refreshToken);
      })
      .catch((error) => {
        dispatch({ type: LOGIN_SUBMIT_ERROR });

        console.log(error);
      })
  }
}

