'use strict';

import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.use('/static', express.static('static'));

var sox = require('sox-stream')

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
