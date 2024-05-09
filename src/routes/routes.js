const express = require("express");
const path = require('path');

const { atualizarInformacoes, obterInformacoes } = require("../controllers/user");
const multer = require("../services/multer");

const routes = express();

routes.get('/usuario', obterInformacoes);
routes.put('/usuario', multer.single('imagem'), atualizarInformacoes);
routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../html/index.html'));
});

module.exports = routes;
