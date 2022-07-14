/* eslint-disable no-case-declarations */
import { lingo } from "../../environment";

export default (state, action) => {
  const actions = lingo.user.actions;

  switch (action.type) {
    case actions.CREATE_USER:
      return {
        ...state,
        users: { isLoading: true },
      };
    case actions.createUserSuccess:
      return {
        ...state,
        users: { ...action.payload },
      };
    case actions.createUserFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    case actions.getUsers:
      return {
        ...state,
        users: { ...action.payload },
      };
    case actions.getUsersSuccess:
      return {
        ...state,
        users: { ...action.payload },
      };
    case actions.getUsersFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    default:
      return state;
  }
};
