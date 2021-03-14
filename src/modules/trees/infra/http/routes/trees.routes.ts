import { Router } from 'express';

import TreesController from '../controllers/TreesController';

const treesRouter = Router();
const treesController = new TreesController();

treesRouter.post('/', treesController.create);

export default treesRouter;
