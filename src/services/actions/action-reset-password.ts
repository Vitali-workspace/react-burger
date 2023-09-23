import RequestApi from "../../utils/request-api";

export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";


export function resetPassword(info: any) {

  return function (dispatch: any) {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    RequestApi.resetPassword(info)
      .then((data) => {
        dispatch({ type: RESET_PASSWORD_SUCCESS });

        console.log(data);
      })
      .catch((error) => {
        dispatch({ type: RESET_PASSWORD_ERROR });

        console.log(error);
      })
  }
}
