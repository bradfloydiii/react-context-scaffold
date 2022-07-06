/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case "getHikers/success":
      return {
        ...state,
        data: action.payload,
      };
    case "getHikers/failed":
      return {
        ...state,
        error: action.payload,
      };
    case "updateHikers/success":
      return {
        ...state,
        data: action.payload,
      };
    case "updateHikers/failed":
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
