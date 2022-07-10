/* eslint-disable no-undef */
import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/Store";
import { Alert, Button, TextField, Grid, Paper } from "@mui/material";
import { lingo } from "../../context/services/env";
import { Container } from "@mui/system";

const User = () => {
  const { state, UserService } = useContext(StoreContext);
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [validation, setValidation] = useState(
    lingo.user.validation.initialState
  );

  return (
    <Container maxWidth="sm" sx={{ marginTop: "15px" }}>
      {state.user?.users?.error && (
        <Alert severity="error">
          getUsers(): {state.user.users.error.name}:{" "}
          {state.user.users.error.message}
        </Alert>
      )}

      {state.user?.users.isLoading && (
        <Alert severity="info">Retrieving user data...</Alert>
      )}

      {!state.user?.users && (
        <Button
          onClick={() => {
            console.log(validation);
            UserService.getUsers();
          }}
          variant="contained"
        >
          Get Users
        </Button>
      )}

      {state.user?.users.data && (
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

      {state.user?.users.data && (
        <>
          <Grid container spacing={2} sx={{ marginTop: "15px" }}>
            <Grid item lg={6}>
              <div>
                <TextField
                  error={!validation.name.valid}
                  id="outlined-error-helper-text"
                  label="Name"
                  value={name}
                  placeholder={"Name"}
                  helperText={validation.name.message}
                  onChange={(e) => {
                    setName(e.target.value);
                    setValidation({
                      group: { ...validation.group },
                      name: {
                        valid: UserService.validateField(name, "name") ?? false,
                        message: !UserService.validateField(name, "name")
                          ? lingo.user.validation.name.error
                          : "",
                      },
                    });
                  }}
                />
              </div>
            </Grid>

            <Grid item lg={6}>
              <div>
                <TextField
                  error={!validation.group.valid}
                  id="outlined-error-helper-text"
                  label="Group"
                  value={group}
                  placeholder={"Group"}
                  helperText={validation.group.message}
                  onChange={(e) => {
                    setGroup(e.target.value);
                    setValidation({
                      name: { ...validation.name },
                      group: {
                        valid:
                          UserService.validateField(group, "group") ?? false,
                        message: !UserService.validateField(group, "group")
                          ? lingo.user.validation.group.error
                          : "",
                      },
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
