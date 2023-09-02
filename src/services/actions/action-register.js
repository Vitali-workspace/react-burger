import requestApi from "../../utils/request-api";
import { setCookie } from "../../utils/cookie-api";

export const REGISTER_SUBMIT_ERROR = "REGISTER_SUBMIT_ERROR";
export const REGISTER_SUBMIT_SUCCESS = "REGISTER_SUBMIT_SUCCESS";
export const REGISTER_SUBMIT_REQUEST = "REGISTER_SUBMIT_REQUEST";

export const token = { access: "accessToken", refresh: "refreshToken" };


export function register(info) {

  return function (dispatch) {
    dispatch({ type: REGISTER_SUBMIT_REQUEST });

    requestApi.register(info)
      .then((data) => {
        dispatch({ type: REGISTER_SUBMIT_SUCCESS, user: data.user });

        setCookie(token.access, data.accessToken);
        localStorage.setItem(token.refresh, data.refreshToken);
      })
      .catch((error) => {
        dispatch({ type: REGISTER_SUBMIT_ERROR });

        console.log(error);
      })
  }
}
