/* eslint-disable no-case-declarations */
import * as env from "../../services/env";

const lingo = env.lingo;

export default (state, action) => {
  switch (action.type) {
    case lingo.user.actions.createUser:
      return {
        ...state,
        users: { isLoading: true },
      };
    case lingo.user.actions.createUserSuccess:
      return {
        ...state,
        users: { ...action.payload },
      };
    case lingo.user.actions.createUserFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    case lingo.user.actions.getUsers:
      return {
        ...state,
        users: { ...action.payload },
      };
    case lingo.user.actions.getUsersSuccess:
      return {
        ...state,
        users: { ...action.payload },
      };
    case lingo.user.actions.getUsersFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    default:
      return state;
  }
};
