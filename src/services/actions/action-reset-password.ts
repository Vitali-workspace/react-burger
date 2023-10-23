import RequestApi from "../../utils/request-api";
import { AppDispatch, AppThunkAction } from "../types/services-types";

export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";

export interface IActionResetPasswordError {
  readonly type: typeof RESET_PASSWORD_ERROR,
}

export interface IActionResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS,
}

export interface IActionResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST,
}

export type TActionsResetPassword =
  | IActionResetPasswordError
  | IActionResetPasswordSuccess
  | IActionResetPasswordRequest;


export const actionResetPasswordError = (): IActionResetPasswordError => ({ type: RESET_PASSWORD_ERROR });

export const actionResetPasswordSuccess = (): IActionResetPasswordSuccess => ({ type: RESET_PASSWORD_SUCCESS });

export const actionResetPasswordRequest = (): IActionResetPasswordRequest => ({ type: RESET_PASSWORD_REQUEST });



export const resetPassword: AppThunkAction = (info) => (dispatch: AppDispatch) => {
  dispatch(actionResetPasswordRequest());

  RequestApi.resetPassword(info)
    .then((data) => {
      dispatch(actionResetPasswordSuccess());

      console.log(data);
    })
    .catch((error) => {
      dispatch(actionResetPasswordError());

      console.log(error);
    })
}
