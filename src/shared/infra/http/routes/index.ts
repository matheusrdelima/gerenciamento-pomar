import { Router } from 'express';

import SpeciesRouter from '@modules/trees/infra/http/routes/species.routes';

const routes = Router();

routes.use('/species', SpeciesRouter);

export default routes;
