/* eslint-disable no-debugger */
import axios from "axios";
import * as ENV from "../env";

export let API = "";

const getUsersSuccess = (args) => {
  const payload = {
    type: "getUsers/success",
    payload: args.users,
  };
  return payload;
};

const getUsersFailed = (args) => {
  const payload = {
    type: "getUsers/failed",
    payload: args.error,
  };
  return payload;
};

export const getUsers = async (dispatch) => {
  if (!dispatch) {
    console.error(`No dispatch method prodived getUsers()`);
    return null;
  }

  API = ENV.getUserAPI;

  const res = await axios
    .get(`${ENV.HOST}:${ENV.PORT}${API}`)
    .catch((error) => ({ error }));

  if (res.data?.users) {
    dispatch(getUsersSuccess({ users: res.data.users }));
  }

  if (res.error) {
    dispatch(getUsersFailed({ error: res.error }));
  }
};
