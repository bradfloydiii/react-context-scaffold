import { lingo } from "../../environment";

const Actions = lingo.user.actions;

export const GET_USERS = () => {
  return {
    type: Actions.GET_USERS,
    payload: { isLoading: true },
  };
};

export const GET_USERS_SUCCESS = (data) => {
  return {
    type: Actions.GET_USERS_SUCCESS,
    payload: { isLoading: false, data },
  };
};

export const GET_USERS_FAIL = (error) => {
  return {
    type: Actions.GET_USERS_FAIL,
    payload: { isLoading: false, error: error },
  };
};

export const CREATE_USER = () => {
  return {
    type: Actions.CREATE_USER,
    payload: { isLoading: true },
  };
};

export const CREATE_USER_SUCCESS = () => {
  return {
    type: Actions.CREATE_USER_SUCCESS,
    payload: { isLoading: false },
  };
};

export const CREATE_USER_FAIL = (error) => {
  return {
    type: Actions.CREATE_USER_FAIL,
    payload: { isLoading: false, error },
  };
};
