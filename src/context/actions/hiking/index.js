// Hiking Service
/* eslint-disable no-debugger */
import axios from "axios";
import * as Configs from "../index";

let API = "";

export const getHikers = async (dispatch = null) => {
  API = "/hiking/json";
  const res = await axios
    .get(`${Configs.HOST}:${Configs.PORT}${API}`)
    .catch((error) => ({ error }));

  if (res.error) {
    if (dispatch) {
      dispatch(getHikersFailed({ error: res.error }));
      return null;
    }
    return getHikersFailed({ error: res.error });
  }
  if (res.data) {
    if (dispatch) {
      dispatch(getHikersSuccess({ data: res.data }));
      return null;
    }
    return getHikersSuccess({ data: res.data });
  }
};

const getHikersSuccess = (args, dispatch = null) => {
  const payload = {
    type: "GET_HIKERS_SUCCESS",
    payload: args.data,
  };

  if (dispatch) {
    dispatch(payload);
    return null;
  }
  return payload;
};

const getHikersFailed = (args, dispatch = null) => {
  const payload = {
    type: "GET_HIKERS_FAILED",
    payload: args.error,
  };

  if (dispatch) {
    dispatch(payload);
    return null;
  }
  return payload;
};
