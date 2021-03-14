import { Router } from 'express';

import SpeciesRouter from '@modules/trees/infra/http/routes/species.routes';
import TreesRouter from '@modules/trees/infra/http/routes/trees.routes';

const routes = Router();

routes.use('/species', SpeciesRouter);
routes.use('/trees', TreesRouter);

export default routes;
