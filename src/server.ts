import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ ok: true });
}); 

app.listen(3333);