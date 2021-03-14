import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import TreesController from '../controllers/TreesController';

const treesRouter = Router();
const treesController = new TreesController();

treesRouter.post('/',
celebrate({
  [Segments.BODY]: {
    description: Joi.string().required(),
    age: Joi.number().required(),
    specie_id: Joi.string().uuid().required(),
  },
}),
treesController.create);

export default treesRouter;
