
require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const addRelationsToModels = require("./database/models");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

async function checkAndSyncPostgreSQL() {
  await checkConnection();
  addRelationsToModels();
  await syncModels("force");
}

function initializeAndListenWithExpress() {
  const app = express()
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/router"))
    .listen(3000, () => {
      console.log(`> Listening on port: ${3000}`);
    });
}

async function startAPI() {
  await checkAndSyncPostgreSQL();
  initializeAndListenWithExpress();
}

startAPI();
