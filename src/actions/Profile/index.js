import { lingo } from "../../environment";

export const getUsers = () => {
  return {
    type: lingo.user.actions.getUsers,
    payload: { isLoading: true },
  };
};