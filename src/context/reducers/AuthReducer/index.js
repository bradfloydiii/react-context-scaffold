/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case "getUsers/success":
      return {
        ...state,
        users: action.payload,
      };
    case "getUsers/failed":
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
