const express = require("express");
const routes = require("./routes/routes");
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const app = express();

app.use(express.static(path.join(__dirname, 'html')));

app.use(express.json());
app.use(cors());
app.use(routes);

const porta = process.env.PORT || 3000
app.listen(porta);
