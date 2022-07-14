export const lingo = {
  server: {
    HOST: "http://localhost",
    PORT: "3001",
  },
  user: {
    name: "User",
    serviceName: "UserService",
    api: {
      createUser: 'user/create',
      GET_USERS: `user/users`,
    },
    actions: {
      CREATE_USER: "CREATE_USER",
      CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
      CREATE_USER_FAIL: "CREATE_USER_FAIL",
      GET_USERS: "GET_USERS",
      GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
      GET_USERS_FAIL: "GET_USERS_FAIL",
    },
    validation: {
      initialState: {
        name: {
          id: "name",
          valid: false,
          message: "",
        },
        group: {
          id: "group",
          valid: false,
          message: "",
        }
      },
      name: {
        pattern: /^[a-zA-Z]+$/,
        error: "Names must not contain numbers or special characters",
      },
      group: {
        pattern: /^[a-zA-Z]+$/,
        error: "Group names must not contain numbers or special characters",
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
