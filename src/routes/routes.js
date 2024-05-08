const express = require("express");
const path = require('path');

const { getInformation, updateInformation } = require("../controllers/user");
const multer = require("../services/multer");

const routes = express();

routes.get('/usuario', getInformation);
routes.put('/usuario', multer.single('imagem'), updateInformation);
routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../html/index.html'));
});

module.exports = routes;
