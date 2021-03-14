import { Router } from 'express';

import SpeciesRouter from '@modules/trees/infra/http/routes/species.routes';
import TreesRouter from '@modules/trees/infra/http/routes/trees.routes';
import GroupRouter from '@modules/trees/infra/http/routes/group.routes';

const routes = Router();

routes.use('/species', SpeciesRouter);
routes.use('/trees', TreesRouter);
routes.use('/group', GroupRouter);

export default routes;
