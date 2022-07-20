const properties = {
  server: {
    host: "http://localhost",
    port: "3001",
  },
  user: {
    name: "User",
    serviceName: "UserService",
    api: {
      createUser: "user/create",
      getUsers: `user/users`,
    },
    actions: {
      createUser: "CREATE_USER",
      createUserSuccess: "CREATE_USER_SUCCESS",
      createUserFail: "CREATE_USER_FAIL",
      getUsers: "GET_USERS",
      getUsersSuccess: "GET_USERS_SUCCESS",
      getUsersFail: "GET_USERS_FAIL",
    },
    loading: {
      message: "Retrieving user data...",
    },
    buttons: {
      addUsersButton: {
        label: "Add User",
      },
      getUserButton: {
        label: "Add User",
      },
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
        },
      },
      name: {
        pattern: /^[a-zA-Z]+$/,
        error: "Names must not contain numbers or special characters",
      },
      group: {
        pattern: /^[a-zA-Z]+$/,
        error: "Group names must not contain numbers or special characters",
      },
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

export default properties;
