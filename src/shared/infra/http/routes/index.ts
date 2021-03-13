import { Router } from 'express';

import treesRouter from '@modules/trees/infra/http/routes/trees.routes';

const routes = Router();

routes.use('/trees', treesRouter);

export default routes;
