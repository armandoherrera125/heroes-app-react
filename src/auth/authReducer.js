import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.login:
      return {
        isAuthenticated: true,
        ...action.payload,
      };
    case types.logout:
      return {
        isAuthenticated: false,
      };
    // case 'REGISTER':
    //   return {
    //     ...state,
    //     user: action.payload,
    //     isAuthenticated: true,
    //   };
    default:
      return state;
  }
}

