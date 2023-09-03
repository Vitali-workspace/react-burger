import requestApi from "../../utils/request-api";
import { deleteCookie, setCookie } from "../../utils/cookie-api";

export const PROFILE_SUBMIT_ERROR = "PROFILE_SUBMIT_ERROR";
export const PROFILE_SUBMIT_SUCCESS = "PROFILE_SUBMIT_SUCCESS";
export const PROFILE_SUBMIT_REQUEST = "PROFILE_SUBMIT_REQUEST";
export const ERROR = { TIMER_JWT: "jwt expired" };

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const token = { access: "accessToken", refresh: "refreshToken" };

export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";
export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";


export function profileInfo(info) {

  return function (dispatch) {
    dispatch({ type: PROFILE_SUBMIT_REQUEST });

    requestApi.updateUserInfo(info)
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


export function getUser() {

  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });

    requestApi.getUserInfo()
      .then((data) => {
        dispatch({ type: GET_USER_SUCCESS, user: data.user });
      })
      .catch((error) => {
        if (error.message === ERROR.TIMER_JWT) {
          dispatch(refreshToken());
        } else {
          dispatch({ type: GET_USER_ERROR, message: error.message });
        }
      })
  }
}


export function refreshToken() {
  return function (dispatch) {
    dispatch({ type: UPDATE_TOKEN_REQUEST });

    requestApi.updateToken()
      .then((data) => {
        dispatch({ type: UPDATE_TOKEN_SUCCESS });

        deleteCookie(token.access);
        localStorage.removeItem(token.refresh);

        setCookie(token.access, data.accessToken);
        localStorage.setItem(token.refresh, data.refreshToken);
      })
      .catch((error) => {
        dispatch({ type: UPDATE_TOKEN_ERROR });

        console.log(error);
      })
  }
}
