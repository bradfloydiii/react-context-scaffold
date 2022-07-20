const Properties = {
  Server: {
    HOST: "http://localhost",
    PORT: "3001",
  },
  // User Module
  User: {
    name: "User",
    serviceName: "UserService",
    API: {
      CREATE_USER: 'user/create',
      GET_USERS: `user/users`,
    },
    Actions: {
      CREATE_USER: "CREATE_USER",
      CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
      CREATE_USER_FAIL: "CREATE_USER_FAIL",
      GET_USERS: "GET_USERS",
      GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
      GET_USERS_FAIL: "GET_USERS_FAIL",
    },
    VALIDATION: {
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

export default Properties;
