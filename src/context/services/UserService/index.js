// context: state.user.data.users
/* eslint-disable no-debugger */
import axios from "axios";
import { lingo } from "../env";

let dispatcher;

export const getUsers = async () => {
  // REST call to get all the users (user/users)
  const res = await axios
    .get(`${lingo.server.host}:${lingo.server.port}/${lingo.user.api.getUsers}`)
    .catch((error) => ({ error }));

  // set the state to loading
  dispatcher({
    type: lingo.user.actions.getUsers,
    payload: { isLoading: true },
  });

  // success <FFVII music plays...>
  res.data?.users &&
    dispatcher({
      type: lingo.user.actions.getUsersSuccess,
      payload: { isLoading: false, data: res.data.users },
    });

  // fail
  res.error &&
    dispatcher({
      type: lingo.user.actions.getUsersFail,
      payload: { isLoading: false, error: res.error },
    });
};

export const createUser = async (payload) => {
  // REST call to create a new user (user/create)
  const res = await axios
    .post(
      `${lingo.server.host}:${lingo.server.port}/${lingo.user.api.createUser}`,
      payload
    )
    .catch((error) => ({ error }));

  // set the state to loading
  dispatcher({
    type: lingo.user.actions.createUser,
    payload: { isLoading: true },
  });

  // success <FFVII music plays...>
  if (res.data?.id) {
    dispatcher({
      type: lingo.user.actions.createUserSuccess,
      payload: { isLoading: false },
    });
    getUsers();
  }

  // fail
  res.error &&
    dispatcher({
      type: lingo.user.actions.createUserFail,
      payload: { isLoading: false, error: res.error },
    });
};

export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
};

export const validateField = (field, patternKey) => {
  return field.match(lingo.user.validation[patternKey].pattern);
};
