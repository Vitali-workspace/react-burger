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
import { IForm, TActionsPages } from "../types/services-types";


interface IStatePages {
  isAuthorized: boolean,
  user: IForm,

  loginRequest: boolean,
  loginError: boolean,
  registerRequest: boolean,
  registerError: boolean,
  logoutRequest: boolean,
  logoutError: boolean,

  forgotPasswordSuccess: boolean,
  forgotPasswordRequest: boolean,
  forgotPasswordError: boolean,

  resetPasswordRequest: boolean,
  resetPasswordError: boolean,
  resetPasswordSuccess: boolean,

  getUserRequest: boolean,
  getUserError: boolean,

  profileRequest: boolean,
  profileError: boolean,

  updateTokenRequest: boolean,
  updateTokenError: boolean,
}


const initialState: IStatePages = {
  isAuthorized: false,
  user: { name: "", email: "", password: "" },

  loginRequest: false,
  loginError: false,
  registerRequest: false,
  registerError: false,
  logoutRequest: false,
  logoutError: false,

  forgotPasswordSuccess: false,
  forgotPasswordRequest: false,
  forgotPasswordError: false,

  resetPasswordRequest: false,
  resetPasswordError: false,
  resetPasswordSuccess: false,

  getUserRequest: false,
  getUserError: false,

  profileRequest: false,
  profileError: false,

  updateTokenRequest: false,
  updateTokenError: false,
}


export const reducerPages = (state = initialState, action: TActionsPages): IStatePages => {
  switch (action.type) {
    case LOGIN_SUBMIT_REQUEST: {
      return { ...state, loginRequest: true, loginError: false }
    }
    case LOGIN_SUBMIT_SUCCESS: {
      return {
        ...state, loginRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuthorized: true,
      }
    }
    case LOGIN_SUBMIT_ERROR: {
      return { ...state, loginRequest: false, loginError: true }
    }
    case REGISTER_SUBMIT_REQUEST: {
      return { ...state, registerRequest: true, registerError: false, }
    }
    case REGISTER_SUBMIT_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuthorized: true,
      }
    }
    case REGISTER_SUBMIT_ERROR: {
      return {
        ...state,
        registerRequest: false,
        registerError: true,
      }
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isAuthorized: false,
        logoutRequest: true,
        logoutError: false,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
      }
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        logoutRequest: false,
        logoutError: true,
      }
    }

    case PROFILE_SUBMIT_REQUEST: {
      return {
        ...state,
        profileRequest: true, profileError: false,
      }
    }
    case PROFILE_SUBMIT_SUCCESS: {
      return {
        ...state,
        profileRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        }
      }
    }
    case PROFILE_SUBMIT_ERROR: {
      return {
        ...state,
        profileRequest: false,
        profileError: true,
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserError: false,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        isAuthorized: true,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        }
      }
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        getUserRequest: false,
        getUserError: true,
        isAuthorized: false,
      }
    }

    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        updateTokenRequest: true,
        updateTokenError: false,

        getUserError: false,
        profileError: false,
      }
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        updateTokenRequest: false,
        isAuthorized: true
      }
    }
    case UPDATE_TOKEN_ERROR: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenError: true,
        isAuthorized: false,
      }
    }

    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordError: false,
        forgotPasswordSuccess: false,
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true,
      }
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordError: true,
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordError: false,
        resetPasswordSuccess: false,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordSuccess: true,
      }
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordError: true,
      }
    }

    default: { return state }

  }
}

