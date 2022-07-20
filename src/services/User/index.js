/* eslint-disable no-debugger */
import { lingo } from "../../environment";
import * as Actions from "../../actions/User";
import * as RestService from "../../services/Rest";

const API = lingo.user.api;

export const initialUserValidationState = lingo.user.validation.initialState;

let dispatcher;
export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
};

export const validateField = (field) => {
  const test = lingo.user.validation[field.id];
  return {
    valid: field.value.match(test.pattern) ?? false,
    message: !field.value.match(test.pattern) ? test.error : "",
  };
};

export const getUsers = async () => {
  dispatcher(Actions.GET_USERS());

  const res = await RestService.get(API.GET_USERS);
  res.data?.users && dispatcher(Actions.GET_USERS_SUCCESS(res.data.users));
  res.error && dispatcher(Actions.GET_USERS_FAIL(res.error));
};

export const createUser = async (payload) => {
  dispatcher(Actions.CREATE_USER());

  const res = await RestService.post(API.CREATE_USER, payload);
  res.data?.id && dispatcher(Actions.CREATE_USER_SUCCESS()); getUsers();
  res.error && dispatcher(Actions.CREATE_USER_FAIL(res.error));
};
