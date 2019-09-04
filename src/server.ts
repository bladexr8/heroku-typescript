// example of running Nodejs/Typescript on Heroku from https://codeburst.io/node-js-typescript-on-heroku-a3ac5a62cf66

import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World from Typescript!!!'));

app.listen(PORT, () => console.log('[INFO] Example app listening on port 3000...'));
