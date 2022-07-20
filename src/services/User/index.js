/* eslint-disable no-debugger */
import properties from "../../environment";
import * as actions from "../../actions/user";
import * as restService from "../rest";

let dispatcher;
export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
};

export const getUsers = async () => {
  dispatcher(actions.getUsers());

  const response = await restService.call("GET", properties.user.api.getUsers);
  
  if (response.data?.users)
    dispatcher(actions.getUsersSuccess(response.data.users));

  if (response.error)
    dispatcher(actions.getUsersFail(response.error));
};

export const createUser = async (payload) => {
  dispatcher(actions.createUser());

  const response = await restService.call("POST", properties.user.api.createUser, payload);

  if (response.data?.id) {
    dispatcher(actions.createUserSuccess());
    getUsers();
  }

  if (response.error)
    dispatcher(actions.createUserFail(response.error));
};
