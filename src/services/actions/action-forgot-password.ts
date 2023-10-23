import RequestApi from "../../utils/request-api";
import { AppDispatch, AppThunkAction } from "../types/services-types";


export const FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR" = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";

export interface IActionForgotPasswordError {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
}

export interface IActionForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IActionForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export type TActionsForgotPassword =
  | IActionForgotPasswordError
  | IActionForgotPasswordSuccess
  | IActionForgotPasswordRequest;


export const actionForgotPasswordError = (): IActionForgotPasswordError => ({ type: FORGOT_PASSWORD_ERROR });

export const actionForgotPasswordSuccess = (): IActionForgotPasswordSuccess => ({ type: FORGOT_PASSWORD_SUCCESS });

export const actionForgotPasswordRequest = (): IActionForgotPasswordRequest => ({ type: FORGOT_PASSWORD_REQUEST });



export const forgotPassword: AppThunkAction = (email) => (dispatch: AppDispatch) => {
  dispatch(actionForgotPasswordRequest());

  RequestApi.forgotPassword(email)
    .then(() => {
      dispatch(actionForgotPasswordSuccess());
    })
    .catch((error) => {
      dispatch(actionForgotPasswordError());

      console.log(error);
    })
}
