import { Router } from 'express';

import SpeciesController from '../controllers/SpeciesController';

const speciesRouter = Router();
const speciesController = new SpeciesController();

speciesRouter.post('/', speciesController.create);

export default speciesRouter;
