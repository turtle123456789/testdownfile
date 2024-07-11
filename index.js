const express = require("express");
const dotenv = require('dotenv');
const routes = require('./src/routes');
const bodyParser = require("body-parser");
const cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
routes(app);
app.use(bodyParser.json())
app.listen(port, () => {
    console.log('Server is running in port: ', + port);
});
