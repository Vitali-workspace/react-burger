import RequestApi from "../../utils/request-api";
import { deleteCookie, setCookie } from "../../utils/cookie-api";
import { IForm } from "../types/services-types";
import { AppDispatch, AppThunkAction } from "../types/services-types";

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


export interface IActionProfileSubmitError {
  readonly type: typeof PROFILE_SUBMIT_ERROR;
  readonly message: string;
}

export interface IActionProfileSubmitSuccess {
  readonly type: typeof PROFILE_SUBMIT_SUCCESS;
  readonly user: IForm;
}

export interface IActionProfileSubmitRequest {
  readonly type: typeof PROFILE_SUBMIT_REQUEST;
}


export interface IActionLogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface IActionLogoutError {
  readonly type: typeof LOGOUT_ERROR;
}

export interface IActionLogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}


export interface IActionUpdateTokenError {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

export interface IActionUpdateTokenRequest {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IActionUpdateTokenSuccess {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}


export interface IActionGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IActionGetUserError {
  readonly type: typeof GET_USER_ERROR;
  readonly message: string;
}

export interface IActionGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: IForm;
}


export type TActionsProfile =
  | IActionProfileSubmitError
  | IActionProfileSubmitSuccess
  | IActionProfileSubmitRequest
  | IActionLogoutRequest
  | IActionLogoutError
  | IActionLogoutSuccess
  | IActionUpdateTokenError
  | IActionUpdateTokenRequest
  | IActionUpdateTokenSuccess
  | IActionGetUserRequest
  | IActionGetUserError
  | IActionGetUserSuccess;


export const actionUpdateTokenError = (): IActionUpdateTokenError => ({ type: UPDATE_TOKEN_ERROR });

export const actionUpdateTokenRequest = (): IActionUpdateTokenRequest => ({ type: UPDATE_TOKEN_REQUEST });

export const actionUpdateTokenSuccess = (): IActionUpdateTokenSuccess => ({ type: UPDATE_TOKEN_SUCCESS });


export const refreshToken: AppThunkAction = () => (dispatch: AppDispatch) => {
  dispatch(actionUpdateTokenRequest());

  RequestApi.updateToken()
    .then((data) => {
      dispatch(actionUpdateTokenSuccess());

      deleteCookie(token.access);
      localStorage.removeItem(token.refresh);

      setCookie(token.access, data.accessToken, data);
      localStorage.setItem(token.refresh, data.refreshToken);
    })
    .catch((error) => {
      dispatch(actionUpdateTokenError());

      console.log(error);
    })
}


export const actionProfileSubmitError = (message: string): IActionProfileSubmitError => ({
  type: PROFILE_SUBMIT_ERROR,
  message,
});

export const actionProfileSubmitSuccess = (user: IForm): IActionProfileSubmitSuccess => ({
  type: PROFILE_SUBMIT_SUCCESS,
  user,
});

export const actionProfileSubmitRequest = (): IActionProfileSubmitRequest => ({
  type: PROFILE_SUBMIT_REQUEST,
});


export const profileInfo: AppThunkAction = (info) => (dispatch: AppDispatch) => {
  dispatch(actionProfileSubmitRequest());

  RequestApi.updateUserInfo(info)
    .then((data) => {
      dispatch(actionProfileSubmitSuccess(data.user));
    })
    .catch((error) => {
      if (error.message === ERROR.TIMER_JWT) {
        dispatch(refreshToken() as AppThunkAction);
      } else {
        dispatch(actionProfileSubmitError(error.message));
      }
    })
}


export const actionLogoutRequest = (): IActionLogoutRequest => ({ type: LOGOUT_REQUEST });

export const actionLogoutError = (): IActionLogoutError => ({ type: LOGOUT_ERROR });

export const actionLogoutSuccess = (): IActionLogoutSuccess => ({ type: LOGOUT_SUCCESS });


export const logout: AppThunkAction = () => (dispatch: AppDispatch) => {
  dispatch(actionLogoutRequest());

  RequestApi.logout()
    .then(() => {
      dispatch(actionLogoutSuccess());

      deleteCookie(token.access);
      localStorage.removeItem(token.refresh);
    })
    .catch((error) => {
      dispatch(actionLogoutError());

      console.log(error);
    })
}


export const actionGetUserRequest = (): IActionGetUserRequest => ({ type: GET_USER_REQUEST });

export const actionGetUserError = (message: string): IActionGetUserError => ({ type: GET_USER_ERROR, message });

export const actionGetUserSuccess = (user: IForm): IActionGetUserSuccess => ({ type: GET_USER_SUCCESS, user });


export const getUser: AppThunkAction = () => (dispatch: AppDispatch) => {
  dispatch(actionGetUserRequest());

  RequestApi.getUserInfo()
    .then((data) => {
      dispatch(actionGetUserSuccess(data.user));
    })
    .catch((error) => {
      if (error.message === "403") {
        dispatch(refreshToken() as AppThunkAction);
      } else {
        dispatch(actionGetUserError(error.message));
      }
    })
}



