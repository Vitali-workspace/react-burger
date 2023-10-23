import RequestApi from "../../utils/request-api";
import { setCookie } from "../../utils/cookie-api";
import { IFormStorage } from "../types/services-types";
import { AppDispatch, AppThunkAction } from "../types/services-types";

export const LOGIN_SUBMIT_REQUEST = "LOGIN_SUBMIT_REQUEST";
export const LOGIN_SUBMIT_ERROR = "LOGIN_SUBMIT_ERROR";
export const LOGIN_SUBMIT_SUCCESS = "LOGIN_SUBMIT_SUCCESS";

export const token = { access: "accessToken", refresh: "refreshToken" };

export interface IActionLoginSubmitRequest {
  readonly type: typeof LOGIN_SUBMIT_REQUEST;
}

export interface IActionLoginSubmitError {
  readonly type: typeof LOGIN_SUBMIT_ERROR;
}

export interface IActionLoginSubmitSuccess {
  readonly type: typeof LOGIN_SUBMIT_SUCCESS;
  readonly user: IFormStorage;
}


export type TActionsLogin =
  | IActionLoginSubmitRequest
  | IActionLoginSubmitError
  | IActionLoginSubmitSuccess;


export const actionLoginSubmitRequest = (): IActionLoginSubmitRequest => ({ type: LOGIN_SUBMIT_REQUEST });

export const actionLoginSubmitError = (): IActionLoginSubmitError => ({ type: LOGIN_SUBMIT_ERROR });

export const actionLoginSubmitSuccess = (user: IFormStorage): IActionLoginSubmitSuccess => ({
  type: LOGIN_SUBMIT_SUCCESS,
  user,
});



export const login: AppThunkAction = (info) => (dispatch: AppDispatch) => {
  dispatch(actionLoginSubmitRequest());

  RequestApi.login(info)
    .then((data) => {
      dispatch(actionLoginSubmitSuccess(data.user));
      setCookie(token.access, data.accessToken, { expires: 120 * 60 });
      localStorage.setItem(token.refresh, data.refreshToken);
    })
    .catch((error) => {
      dispatch(actionLoginSubmitError());

      console.log(error);
    })
}

