const { Router } = require("express");
const { User } = require("./app/models");

const authMiddleware = require("./app/middlewares/auth");

const SessionController = require("./app/controllers/SessionController");

const routes = Router();

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
