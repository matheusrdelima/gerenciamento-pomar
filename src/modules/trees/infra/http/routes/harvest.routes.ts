import { Router } from 'express';

import HarvestController from '../controllers/HarvestController';

const harvestRouter = Router();
const harvestController = new HarvestController();

harvestRouter.post('/', harvestController.create);

export default harvestRouter;
