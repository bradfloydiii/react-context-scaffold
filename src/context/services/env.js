export const lingo = {
  server: {
    host: "http://localhost",
    port: "3001",
  },
  user: {
    name: "User",
    serviceName: "UserService",
    api: {
      getUsers: `user/users`,
      createUser: 'user/create',
    },
    actions: {
      createUser: "CREATE_USER",
      createUserSuccess: "CREATE_USER_SUCCESS",
      createUserFail: "CREATE_USER_FAIL",
      getUsers: "GET_USERS",
      getUsersSuccess: "GET_USERS_SUCCESS",
      getUsersFail: "GET_USERS_FAIL",
    },
    validation: {
      initialState: {
        name: {
          valid: false,
          message: "",
        },
        group: {
          valid: false,
          message: "",
        }
      },
      name: {
        pattern: /^[a-zA-Z]+$/,
        error: "Incorrect name entry",
      },
      group: {
        pattern: /^[a-zA-Z]+$/,
        error: "Incorrect group entry",
      }
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
