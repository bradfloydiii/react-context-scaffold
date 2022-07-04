// Authorization Service
/* eslint-disable no-debugger */
import axios from "axios";
import * as Configs from "../index";

let API = "";

export const getUsers = async (dispatch = null) => {

  API = "/users/json";
  
  const res = await axios
    .get(`${Configs.HOST}:${Configs.PORT}${API}`)
    .catch((error) => ({ error }));

  if (res.error) {
    if (dispatch) {
      dispatch(getUsersFailed({error: res.error}));
      return null;
    }
    return getUsersFailed({error: res.error});
  }
  if (res.data.users) {
    if (dispatch) {
      dispatch(getUsersSuccess({users: res.data.users}));
      return null;
    }
    return getUsersSuccess({users: res.data.users});
  }
};

const getUsersSuccess = (args, dispatch = null) => {
  const payload = {
    type: "GET_USERS_SUCCESS",
    payload: args.users,
  };

  if (dispatch) {
    dispatch(payload);
    return null;
  }
  return payload;
};

const getUsersFailed = (args, dispatch = null) => {
  const payload = {
    type: "GET_USERS_FAILED",
    payload: args.error,
  };

  if (dispatch) {
    dispatch(payload);
    return null;
  }
  return payload;
};
