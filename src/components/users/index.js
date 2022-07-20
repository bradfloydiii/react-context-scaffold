/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/store";
import { lingo } from "../../environment";

import { Alert, Button, TextField, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";

import User from "./user";
import "./users.css";

const validateField = (field) => {
  const test = lingo.user.validation[field.id];
  return {
    valid: field.value.match(test.pattern) ?? false,
    message: !field.value.match(test.pattern) ? test.error : "",
  };
};

const handleValidation = (field, validation, setValidation) => {
  const { id } = field;
  const { valid, message } = validateField(field);

  switch (id) {
    case "name":
      setValidation({
        group: { ...validation.group },
        name: {
          id,
          valid,
          message,
        },
      });
      break;
    case "group":
      setValidation({
        name: { ...validation.name },
        group: {
          id,
          valid,
          message,
        },
      });
      break;
  }
};

const Users = () => {
  const { user, UserService } = useContext(StoreContext);

  // component fields
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  // validation state
  const [validation, setValidation] = useState({
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
  });

  useEffect(() => {
    console.log("user component init...");
  }, []);

  return (
    <Container maxWidth="sm" className={"container"}>
      {/* state: error loading users */}
      {user?.users?.error && (
        <Alert severity="error">
          getUsers(): {user?.users?.error.name}: {user?.users?.error.message}
        </Alert>
      )}

      {/* state: loading users... */}
      {user?.users?.isLoading && (
        <Alert severity="info">Retrieving user data...</Alert>
      )}

      {/* state: no users loaded */}
      {!user?.users && (
        <Button
          onClick={() => {
            UserService.getUsers();
          }}
          variant="contained"
        >
          Get Users
        </Button>
      )}

      {/* state: users loaded */}
      {user?.users?.data && (
        <>
          <Paper elevation={3} className={"paper"}>
            {user.users.data.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </Paper>
        </>
      )}

      {/* state: users loaded */}
      {user?.users?.data && (
        <>
          <Grid container spacing={2} className={"container"}>
            <Grid item lg={6}>
              <div>
                <TextField
                  id="name"
                  label="Name"
                  className={"outlined-error-helper-text"}
                  value={name}
                  placeholder={"Name"}
                  error={!validation.name.valid}
                  helperText={validation.name.message}
                  onChange={(e) => {
                    setName(e.target.value);
                    handleValidation(
                      {
                        id: e.target.id,
                        value: e.target.value,
                      },
                      validation,
                      setValidation
                    );
                  }}
                />
              </div>
            </Grid>

            <Grid item lg={6}>
              <div>
                <TextField
                  id="group"
                  label="Group"
                  className={"outlined-error-helper-text"}
                  value={group}
                  placeholder={"Group"}
                  error={!validation.group.valid}
                  helperText={validation.group.message}
                  onChange={(e) => {
                    setGroup(e.target.value);
                    handleValidation(
                      {
                        id: e.target.id,
                        value: e.target.value,
                      },
                      validation,
                      setValidation
                    );
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

export default Users;
