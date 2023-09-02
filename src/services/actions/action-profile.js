import requestApi from "../../utils/request-api";
import { deleteCookie } from "../../utils/cookie-api";

export const PROFILE_SUBMIT_ERROR = "PROFILE_SUBMIT_ERROR";
export const PROFILE_SUBMIT_SUCCESS = "PROFILE_SUBMIT_SUCCESS";
export const PROFILE_SUBMIT_REQUEST = "PROFILE_SUBMIT_REQUEST";
export const ERROR = { TIMER_JWT: "jwt expired" };

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const token = { access: "accessToken", refresh: "refreshToken" };


export function profileInfo(info) {

  return function (dispatch) {
    dispatch({ type: PROFILE_SUBMIT_REQUEST });

    requestApi.updateUser(info)
      .then((data) => {
        dispatch({ type: PROFILE_SUBMIT_SUCCESS, user: data.user });
      })
      .catch((error) => {
        if (error.message === ERROR.TIMER_JWT) {
          dispatch(requestApi.updateToken());
        } else {
          dispatch({ type: PROFILE_SUBMIT_ERROR, message: error.message });
        }
      })
  }
}


export function logout() {

  return function (dispatch) {
    dispatch({ type: LOGOUT_REQUEST });

    requestApi.logout()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });

        deleteCookie(token.access);
        localStorage.removeItem(token.refresh);
      })
      .catch((error) => {
        dispatch({ type: LOGOUT_ERROR });

        console.log(error);
      })
  }
}
