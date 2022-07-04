/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USERS_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_HIKERS_SUCCESS":
      return {
        ...state,
        hikers: action.payload,
      };
    case "GET_HIKERS_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
