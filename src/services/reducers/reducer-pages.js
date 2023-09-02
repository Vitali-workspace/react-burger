import { LOGIN_SUBMIT_REQUEST, LOGIN_SUBMIT_ERROR, LOGIN_SUBMIT_SUCCESS } from "../actions/action-login"



const initialState = {

  isAuthenticated: false,

  user: { name: "", email: "", password: "" },

  loginRequest: false,
  loginError: false,
  registerRequest: false,
  registerError: false,
  logoutRequest: false,
  logoutError: false,


}


export const reducerPages = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT_REQUEST: {
      return { ...state, loginRequest: true, loginError: false }
    }

    default: { return state }

  }
}