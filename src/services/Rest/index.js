import axios from "axios";
import { lingo } from "../../environment";

const SERVER = lingo.server;

const post = (api, payload) => {
  return axios
    .post(`${SERVER.HOST}:${SERVER.PORT}/${api}`, payload)
    .catch((error) => ({ error }));
};

const get = (api) => {
  return axios
    .get(`${SERVER.HOST}:${SERVER.PORT}/${api}`)
    .catch((error) => ({ error }));
};

const put = (api, payload) => {
  return axios
    .put(`${SERVER.HOST}:${SERVER.PORT}/${api}`, payload)
    .catch((error) => ({ error }));
};

const remove = (api, payload) => {
  return axios
    .delete(`${SERVER.HOST}:${SERVER.PORT}/${api}`, payload)
    .catch((error) => ({ error }));
};

const error = (protocol = "unknown") => {
  return { name: "Error", message: `bad protocol: ${protocol}` };
};

export const call = (protocol, api, payload = {}) => {
  console.log(protocol.toLowerCase())
  switch (protocol.toLowerCase()) {
    case "post":
      return post(api, payload);
    case "get":
      return get(api);
    case "put":
      return put(api, payload);
    case "delete":
      return remove(api, payload);
    default:
      return error(protocol);
  }
};
