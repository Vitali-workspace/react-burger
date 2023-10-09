import RequestApi from "../../utils/request-api";
import { setCookie } from "../../utils/cookie-api";
import { IForm } from "../types/services-types";
import { AppDispatch, AppThunkAction } from "../types/services-types";

export const REGISTER_SUBMIT_ERROR = "REGISTER_SUBMIT_ERROR";
export const REGISTER_SUBMIT_SUCCESS = "REGISTER_SUBMIT_SUCCESS";
export const REGISTER_SUBMIT_REQUEST = "REGISTER_SUBMIT_REQUEST";

export const token = { access: "accessToken", refresh: "refreshToken" };

export interface IActionRegisterSubmitRequest {
  readonly type: typeof REGISTER_SUBMIT_REQUEST;
}

export interface IActionRegisterSubmitError {
  readonly type: typeof REGISTER_SUBMIT_ERROR;
}

export interface IActionRegisterSubmitSuccess {
  readonly type: typeof REGISTER_SUBMIT_SUCCESS;
  readonly user: IForm;
}

export type TActionsRegister =
  | IActionRegisterSubmitRequest
  | IActionRegisterSubmitError
  | IActionRegisterSubmitSuccess;


export const actionRegisterSubmitRequest = (): IActionRegisterSubmitRequest => ({ type: REGISTER_SUBMIT_REQUEST });

export const actionRegisterSubmitError = (): IActionRegisterSubmitError => ({ type: REGISTER_SUBMIT_ERROR });

export const actionRegisterSubmitSuccess = (user: IForm): IActionRegisterSubmitSuccess => ({
  type: REGISTER_SUBMIT_SUCCESS,
  user,
});



export const register: AppThunkAction = (info) => (dispatch: AppDispatch) => {
  dispatch(actionRegisterSubmitRequest());

  RequestApi.registration(info)
    .then((data) => {
      dispatch(actionRegisterSubmitSuccess(data.user));
      setCookie(token.access, data.accessToken, info);
      localStorage.setItem(token.refresh, data.refreshToken);
    })
    .catch((error) => {
      dispatch(actionRegisterSubmitError());

      console.log(error);
    })
}
