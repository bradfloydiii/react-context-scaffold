/* eslint-disable no-case-declarations */
import Properties from "../../environment";

const Actions = Properties.user.actions;

export default (state, action) => {

  switch (action.type) {
     
    case Actions.createUser:
      return {
        ...state,
        users: { isLoading: true },
      };
    case Actions.createUserSuccess:
      console.log("action.type", action.type);
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.createUserFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.getUsers:
      console.log("action.type", action.type);
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.getUsersSuccess:
      console.log("action.type", action.type); 
      return {
        ...state,
        users: { ...action.payload },
      };
    case Actions.getUsersFail:
      return {
        ...state,
        users: { ...action.payload },
      };
    default:
      return state;
  }
};
