import requestApi from "../../utils/request-api";

export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";


export function forgotPassword(info) {

  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    requestApi.forgotPassword(info)
      .then(() => {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: FORGOT_PASSWORD_ERROR });

        console.log(error);
      })
  }
}