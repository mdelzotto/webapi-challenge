const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const projectRouter = require("./projectRouter.js");
const actionRouter = require("./actionRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
