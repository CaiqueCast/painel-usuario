const express = require("express");
const routes = require("./routes/routes");
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'html')));

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000);
