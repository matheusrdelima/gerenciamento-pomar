import { Router } from 'express';

const treesRouter = Router();

treesRouter.get('/', (request, response) => {
  return response.json({ ok: true });
});

export default treesRouter;
