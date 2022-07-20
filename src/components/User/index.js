/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/store";
import { Alert, Button, TextField, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";

const User = () => {
  const { state, UserService } = useContext(StoreContext);

  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [validation, setValidation] = useState(
    UserService.initialUserValidationState
  );

  useEffect(() => {
    console.log('user component init...')
  }, []);

  const handleNameValidation = (name) => {
    const { id } = name;
    const { valid, message } = UserService.validateField(name);
    setValidation({
      group: { ...validation.group },
      name: {
        id,
        valid,
        message,
      },
    });
  };

  const handleGroupValidation = (group) => {
    const { id } = group;
    const { valid, message } = UserService.validateField(group);
    setValidation({
      name: { ...validation.name },
      group: {
        id,
        valid,
        message,
      },
    });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "15px" }}>
      {state.user?.users?.error && (
        <Alert severity="error">
          getUsers(): {state.user.users.error.name}:{" "}
          {state.user.users.error.message}
        </Alert>
      )}
      {state.user?.users?.isLoading && (
        <Alert severity="info">Retrieving user data...</Alert>
      )}
      {!state.user?.users && (
        <Button
          onClick={() => {
            UserService.getUsers();
          }}
          variant="contained"
        >
          Get Users
        </Button>
      )}
      {state.user?.users?.data && (
        <>
          <Paper
            elevation={3}
            sx={{ padding: "2rem", maxWidth: "400px", margin: "10px 0 0 10px" }}
          >
            {state.user.users.data.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </Paper>
        </>
      )}

      {state.user?.users?.data && (
        <>
          <Grid container spacing={2} sx={{ marginTop: "15px" }}>
            <Grid item lg={6}>
              <div>
                <TextField
                  id="name"
                  className={"outlined-error-helper-text"}
                  error={!validation.name.valid}
                  label="Name"
                  value={name}
                  placeholder={"Name"}
                  helperText={validation.name.message}
                  onChange={(e) => {
                    setName(e.target.value);
                    handleNameValidation({
                      id: e.target.id,
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </Grid>

            <Grid item lg={6}>
              <div>
                <TextField
                  id="group"
                  className={"outlined-error-helper-text"}
                  error={!validation.group.valid}
                  label="Group"
                  value={group}
                  placeholder={"Group"}
                  helperText={validation.group.message}
                  onChange={(e) => {
                    setGroup(e.target.value);
                    handleGroupValidation({
                      id: e.target.id,
                      value: e.target.value,
                    });
                  }}
                />
              </div>
            </Grid>

            <Grid item lg={12}>
              <div>
                <Button
                  onClick={() => UserService.createUser({ name, group })}
                  variant="contained"
                >
                  Add User
                </Button>
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default User;
