import express from 'express';

import '@shared/infra/typeorm';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);