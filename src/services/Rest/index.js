import axios from "axios";
import Properties from "../../environment";

const SERVER = Properties.server;

const post = (api, payload) => {
  return axios
    .post(`${SERVER.host}:${SERVER.port}/${api}`, payload)
    .catch((error) => ({ error }));
};

const get = async (api) => {
  try {
    return await axios
      .get(`${SERVER.host}:${SERVER.port}/${api}`);
  } catch (error) {
    return ({ error });
  }
};

const put = async (api, payload) => {
  try {
    return await axios
      .put(`${SERVER.host}:${SERVER.port}/${api}`, payload);
  } catch (error) {
    return ({ error });
  }
};

const remove = async (api, payload) => {
  try {
    return await axios
      .delete(`${SERVER.host}:${SERVER.port}/${api}`, payload);
  } catch (error) {
    return ({ error });
  }
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
