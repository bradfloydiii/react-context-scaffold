/* eslint-disable no-case-declarations */
import Properties from "../../environment";

const Actions = Properties.User.Actions;

export default (state, action) => {

  switch (action.type) {
    case Actions.CREATE_USER:
      return {
        ...state,
        users: { isLoading: true },
      };
    case Actions.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.CREATE_USER_FAIL:
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.GET_USERS:
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.GET_USERS_FAIL:
      return {
        ...state,
        users: { ...action.payload },
      };
    default:
      return state;
  }
};
