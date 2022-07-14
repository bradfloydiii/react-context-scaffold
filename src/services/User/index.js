// context: state.user.data.users
/* eslint-disable no-debugger */
import axios from "axios";
import { lingo } from "../../environment";
import * as Actions from "../../actions/User";

const API = lingo.user.api;
const SERVER = lingo.user.server;

let dispatcher;
export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
};

export const getUsers = async () => {
  dispatcher(Actions.GET_USERS());

  const res = await axios
    .get(`${SERVER.HOST}:${SERVER.PORT}/${API.GET_USERS}`)
    .catch((error) => ({ error }));

  res.data?.users && dispatcher(Actions.GET_USERS_SUCCESS(res.data.users));
  res.error && dispatcher(Actions.GET_USERS_FAIL(res.error));
};

export const createUser = async (payload) => {
  dispatcher(Actions.CREATE_USER());

  const res = await axios
    .post(`${SERVER.HOST}:${SERVER.PORT}/${API.CREATE_USER}`, payload)
    .catch((error) => ({ error }));

  res.data?.id && dispatcher(Actions.CREATE_USER_SUCCESS());
  getUsers();
  res.error && dispatcher(Actions.CREATE_USER_FAIL(res.error));
};

export const validateField = (field) => {
  const test = lingo.user.validation[field.id];
  return {
    valid: field.value.match(test.pattern) ?? false,
    message: !field.value.match(test.pattern) ? test.error : "",
  };
};

export const initialUserValidationState = lingo.user.validation.initialState;
