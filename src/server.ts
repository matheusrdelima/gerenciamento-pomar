import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
  return response.json({ ok: true });
}); 

app.listen(3333);