// context: state.user.data.users

/* eslint-disable no-debugger */
import axios from "axios";
import * as env from "../env";

const lingo = env.lingo.user;
const server = env.lingo.server;

const addNewUser = (payload) => {
  return {
    type: lingo.actions.addUser,
    payload,
  };
};

const getUsers = (payload) => {
  return {
    type: lingo.actions.getUsers,
    payload,
  };
};

const getUsersSuccess = (payload) => {
  return {
    type: lingo.actions.getUsersSuccess,
    payload,
  };
};

const getUsersFail = (payload) => {
  return {
    type: lingo.actions.getUsersFail,
    payload,
  };
};

export const getAllUsers = async (dispatch) => {
  dispatch(getUsers({ isLoading: true, data: null }));

  const res = await axios
    .get(`${server.host}:${server.port}/${lingo.api.getAllUsers}`)
    .catch((error) => ({ error }));

  if (res.data?.users) {
    dispatch(getUsersSuccess({ isLoading: false, data: res.data.users }));
  }

  if (res.error) {
    dispatch(getUsersFail({ isLoading: false, error: res.error }));
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addNewUser({ isLoading: true }));

  const res = await axios
    .post(`${server.host}:${server.port}/${lingo.api.addUser}`, user)
    .catch((error) => ({ error }));

  if (res?.data) getAllUsers(dispatch);
  if (res.error) dispatch(getUsersFail({ isLoading: false, error: res.error }));
};
