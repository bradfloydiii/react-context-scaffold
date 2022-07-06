/* eslint-disable no-debugger */
import axios from "axios";
import * as ENV from "../env";

let API = "";

const getHikersSuccess = (args) => {
  const payload = {
    type: "getHikers/success",
    payload: args.data,
  };
  return payload;
};

const getHikersFailed = (args) => {
  const payload = {
    type: "getHikers/failed",
    payload: args.error,
  };
  return payload;
};

const UPDATE_HIKER_SUCCESS = (args) => {
  const payload = {
    type: "updateHikers/failed",
    payload: args.error,
  };
  return payload;
};

const UPDATE_HIKER_FAILED = (args) => {
  const payload = {
    type: "updateHikers/failed",
    payload: args.error,
  };
  return payload;
};

export const getHikers = async (dispatch) => {
  API = ENV.getHikersAPI;

  const res = await axios
    .get(`${ENV.HOST}:${ENV.PORT}${API}`)
    .catch((error) => ({ error }));

  if (res.error) {
    dispatch(getHikersFailed({ error: res.error }));
  }

  if (res.data) {
    dispatch(getHikersSuccess({ data: res.data }));
  }
};

export const updateHiker = async (dispatch) => {
  API = ENV.updateHikersAPI;

  const res = await axios
    .get(`${ENV.HOST}:${ENV.PORT}${API}`)
    .catch((error) => ({ error }));

  if (res.error) {
    dispatch(UPDATE_HIKER_FAILED({ error: res.error }));
  }

  if (res.data) {
    dispatch(UPDATE_HIKER_SUCCESS({ data: res.data }));
  }

}
