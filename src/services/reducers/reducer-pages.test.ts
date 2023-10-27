import { reducerPages, initialState } from "./reducer-pages";
import { LOGIN_SUBMIT_REQUEST, LOGIN_SUBMIT_ERROR, LOGIN_SUBMIT_SUCCESS } from "../actions/action-login";
import { REGISTER_SUBMIT_REQUEST, REGISTER_SUBMIT_SUCCESS, REGISTER_SUBMIT_ERROR } from "../actions/action-register";
import {
  LOGOUT_REQUEST, LOGOUT_ERROR, LOGOUT_SUCCESS,
  PROFILE_SUBMIT_ERROR, PROFILE_SUBMIT_SUCCESS, PROFILE_SUBMIT_REQUEST,
  UPDATE_TOKEN_ERROR, UPDATE_TOKEN_REQUEST, UPDATE_TOKEN_SUCCESS,
  GET_USER_REQUEST, GET_USER_ERROR, GET_USER_SUCCESS
} from "../actions/action-profile";
import { FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_REQUEST } from "../actions/action-forgot-password";
import { RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_REQUEST } from "../actions/action-reset-password";
import { TActionsLogin, IActionLoginSubmitSuccess } from "../actions/action-login";
import { TActionsRegister, IActionRegisterSubmitSuccess } from "../actions/action-register";
import { TActionsResetPassword } from "../actions/action-reset-password";
import { TActionsProfile } from "../actions/action-profile";
import { ILogin } from "../types/services-types";



describe("reducerPages", () => {
  it("Должен вернуть initialState", () => {
    expect(reducerPages(undefined, {} as any)).toEqual(initialState);
  });

  it("REGISTER_SUBMIT_REQUEST", () => {
    const action: TActionsRegister = { type: REGISTER_SUBMIT_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      registerRequest: true,
      registerError: false,
    });
  });

  it("REGISTER_SUBMIT_SUCCESS", () => {
    const action: IActionRegisterSubmitSuccess = {
      type: REGISTER_SUBMIT_SUCCESS,
      user: {
        name: "name",
        email: "",
        password: "",
      }
    };
    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      registerRequest: false,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      },
      isAuthorized: true,
    });
  });

  it("REGISTER_SUBMIT_ERROR", () => {
    const action: TActionsRegister = { type: REGISTER_SUBMIT_ERROR };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      registerRequest: false,
      registerError: true,
    });
  });

  it("LOGIN_SUBMIT_REQUEST", () => {
    const action: TActionsLogin = { type: LOGIN_SUBMIT_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      loginRequest: true,
      loginError: false,
    })
  });

  it("LOGIN_SUBMIT_SUCCESS", () => {
    const action: IActionLoginSubmitSuccess = {
      type: LOGIN_SUBMIT_SUCCESS,
      user: {
        name: "", email: "", password: "",
      }
    };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      loginRequest: false,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      },
      isAuthorized: true,
    });
  });

  it("LOGIN_SUBMIT_ERROR", () => {
    const action: TActionsLogin = { type: LOGIN_SUBMIT_ERROR };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      loginRequest: false,
      loginError: true,
    })
  });

  it("FORGOT_PASSWORD_REQUEST", () => {
    const action = { type: FORGOT_PASSWORD_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordError: false,
      forgotPasswordSuccess: false,
    })
  });

  it("FORGOT_PASSWORD_SUCCESS", () => {
    const action = { type: FORGOT_PASSWORD_SUCCESS };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordSuccess: true,
    });
  });

  it("FORGOT_PASSWORD_ERROR", () => {
    const action = { type: FORGOT_PASSWORD_ERROR };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordError: true,
    })
  });

  it("RESET_PASSWORD_REQUEST", () => {
    const action: TActionsResetPassword = { type: RESET_PASSWORD_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordError: false,
      resetPasswordSuccess: false,
    })
  });

  it("RESET_PASSWORD_SUCCESS", () => {
    const action: TActionsResetPassword = { type: RESET_PASSWORD_SUCCESS };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordSuccess: true,
    });
  });

  it("RESET_PASSWORD_ERROR", () => {
    const action: TActionsResetPassword = { type: RESET_PASSWORD_ERROR };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordError: true,
    })
  });

  it("PROFILE_SUBMIT_REQUEST", () => {
    const action: TActionsProfile = { type: PROFILE_SUBMIT_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      profileRequest: true,
      profileError: false,
    })
  });

  it("PROFILE_SUBMIT_SUCCESS", () => {
    const action: TActionsProfile = {
      type: PROFILE_SUBMIT_SUCCESS,
      user: { name: "", email: "", password: "" }
    };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      profileRequest: false,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      }
    });
  });

  it("PROFILE_SUBMIT_ERROR", () => {
    const action: TActionsProfile = {
      type: PROFILE_SUBMIT_ERROR,
      message: "",
    };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      profileRequest: false,
      profileError: true,
    })
  });

  it("GET_USER_REQUEST", () => {
    const action: TActionsProfile = { type: GET_USER_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      getUserRequest: true,
      getUserError: false,
    })
  });

  it("GET_USER_SUCCESS", () => {
    const action: TActionsProfile = { type: GET_USER_SUCCESS, user: { name: "", email: "", password: "" } };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      getUserRequest: false,
      isAuthorized: true,
      user: {
        ...initialState.user,
        name: action.user.name,
        email: action.user.email,
      }
    });
  });

  it("GET_USER_ERROR", () => {
    const action: TActionsProfile = { type: GET_USER_ERROR, message: "" };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      getUserRequest: false,
      getUserError: true,
      isAuthorized: false,
    })
  });

  it("UPDATE_TOKEN_REQUEST", () => {
    const action: TActionsProfile = { type: UPDATE_TOKEN_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      updateTokenRequest: true,
      updateTokenError: false,
      getUserError: false,
      profileError: false,
    })
  });

  it("UPDATE_TOKEN_SUCCESS", () => {
    const action: TActionsProfile = { type: UPDATE_TOKEN_SUCCESS };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      updateTokenRequest: false,
      isAuthorized: true
    });
  });

  it("UPDATE_TOKEN_ERROR", () => {
    const action: TActionsProfile = { type: UPDATE_TOKEN_ERROR };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      updateTokenRequest: false,
      updateTokenError: true,
      isAuthorized: false,
    })
  });

  it("LOGOUT_REQUEST", () => {
    const action: TActionsProfile = { type: LOGOUT_REQUEST };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      isAuthorized: false,
      logoutRequest: true,
      logoutError: false,
    })
  });

  it("LOGOUT_SUCCESS", () => {
    const action: TActionsProfile = { type: LOGOUT_SUCCESS };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      logoutRequest: false,
    });
  });

  it("LOGOUT_ERROR", () => {
    const action: TActionsProfile = { type: LOGOUT_ERROR };

    expect(reducerPages(initialState, action)).toEqual({
      ...initialState,
      logoutRequest: false,
      logoutError: true,
    })
  });
});

