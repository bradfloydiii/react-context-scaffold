/* eslint-disable no-debugger */
import properties from "../../environment";
import * as actions from "../../actions/User";
import * as restService from "../Rest";

let dispatcher;
export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
  console.log("dispatcher in UserService", dispatcher);
};

export const getUsers = async () => {
  dispatcher(actions.GET_USERS());

  const response = await restService.call("GET", properties.user.api.getUsers);
  if (response.data?.users) {
    console.log("response.data.users", response.data.users);
    dispatcher(actions.GET_USERS_SUCCESS(response.data.users));
  }

  if (response.error)
    dispatcher(actions.GET_USERS_FAIL(response.error));
};

export const createUser = async (payload) => {
  dispatcher(actions.CREATE_USER());

  const response = await restService.call("POST", properties.user.api.createUser, payload);

  if (response.data?.id) {
    dispatcher(actions.CREATE_USER_SUCCESS());
    getUsers();
  }

  if (response.error)
    dispatcher(actions.CREATE_USER_FAIL(response.error));
};
