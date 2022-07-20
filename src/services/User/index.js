/* eslint-disable no-debugger */
import { lingo } from "../../environment";
import * as Actions from "../../actions/user";
import * as RestService from "../rest";

let dispatcher;
export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
};

export const getUsers = async () => {
  dispatcher(Actions.GET_USERS());

  const response = await RestService.call("GET", lingo.user.api.GET_USERS);
  response.data?.users && dispatcher(Actions.GET_USERS_SUCCESS(response.data.users));
  response.error && dispatcher(Actions.GET_USERS_FAIL(response.error));
};

export const createUser = async (payload) => {
  dispatcher(Actions.CREATE_USER());

  const response = await RestService.call("POST", lingo.user.api.CREATE_USER, payload);
  response.data?.id && dispatcher(Actions.CREATE_USER_SUCCESS()); getUsers();
  response.error && dispatcher(Actions.CREATE_USER_FAIL(response.error));
};
