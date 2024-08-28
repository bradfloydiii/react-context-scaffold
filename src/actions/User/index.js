import Properties from "../../environment";

const Actions = Properties.user.actions;

export const GET_USERS = () => {
  return {
    type: Actions.getUsers,
    payload: { isLoading: true },
  };
};

export const GET_USERS_SUCCESS = (data) => {
  return {
    type: Actions.getUsersSuccess,
    payload: { isLoading: false, data },
  };
};

export const GET_USERS_FAIL = (error) => {
  return {
    type: Actions.getUsersFail,
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
