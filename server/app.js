const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.port || 3001;
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

console.info(path.join(__dirname, 'build'));
// app.use(express.static('../client/dist/client'));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', router);

require('./routes/routes')(router);

app.listen(port, () => console.log(`App running on port ${port}`));