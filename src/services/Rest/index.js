import axios from "axios";
import { lingo } from "../../environment";

const SERVER = lingo.user.server;

export const post = (api, payload) => {
  return axios
    .post(`${SERVER.HOST}:${SERVER.PORT}/${api}`, payload)
    .catch((error) => ({ error }));
};

export const get = (api) => {
  return axios
    .get(`${SERVER.HOST}:${SERVER.PORT}/${api}`)
    .catch((error) => ({ error }));
};

export const put = (api, payload) => {
  return axios
    .put(`${SERVER.HOST}:${SERVER.PORT}/${api}`, payload)
    .catch((error) => ({ error }));
};

export const remove = (api, payload) => {
  return axios
    .delete(`${SERVER.HOST}:${SERVER.PORT}/${api}`, payload)
    .catch((error) => ({ error }));
};
