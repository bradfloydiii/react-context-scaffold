module.exports = (router) => {
  const hiking_json = require("../json/hiking.json");
  const users_json = require("../json/users.json");

  router.get("/hike/hikers", (req, res) => {
    res.status(200).send(hiking_json);
  });

  router.get("/user/users", (req, res) => {
    res.status(200).send(users_json);
  });

  router.post("/user/create", (req, res) => {
    const { v4: uuidv4 } = require("uuid");

    const id = uuidv4();
    req.body.id = id;
    users_json.users.push(req.body);
    res.status(200).send({id});
  });
};
