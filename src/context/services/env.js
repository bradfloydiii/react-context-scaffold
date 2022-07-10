export const lingo = {
  server: {
    host: "http://localhost",
    port: "3001",
  },

  user: {
    name: "User",
    serviceName: "UserService",
    api: {
      getAllUsers: `user/users`,
      addUser: 'user/create',
    },
    actions: {
      addUser: "ADD_USER",
      getUsers: "GET_USERS",
      getUsersSuccess: "GET_USERS_SUCCESS",
      getUsersFail: "GET_USERS_FAIL",
    },
    errorMessages: {
      noDispatchMethodProvided: "No dispatch method prodived.",
    },
  },
  default: {
    name: "Default",
    serviceName: "DefaultService",
    errorMessages: {
      noDispatchMethodProvided: "No dispatch method provided",
    },
  },
};
