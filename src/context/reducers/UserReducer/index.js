/* eslint-disable no-case-declarations */
import * as env from "../../services/env";

const lingo = env.lingo.user;

export default (state, action) => {
  switch (action.type) {
    case lingo.actions.addUser:
      return {
        ...state,
        users: { isLoading: true },
      };
    case lingo.actions.getAllUsers:
      return {
        ...state,
        users: { ...action.payload },
      };
    case lingo.actions.getUsersSuccess:
      return {
        ...state,
        users: { ...action.payload },
      };
    case lingo.actions.getUsersFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    default:
      return state;
  }
};
