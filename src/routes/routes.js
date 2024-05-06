const express = require("express");
const { getInformation, updateInformation } = require("../controllers/user");

const routes = express();

routes.get('/usuario', getInformation);
routes.put('/usuario', updateInformation);

module.exports = routes;
