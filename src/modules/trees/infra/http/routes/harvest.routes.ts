import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import HarvestController from '../controllers/HarvestController';

const harvestRouter = Router();
const harvestController = new HarvestController();

harvestRouter.post('/',
celebrate({
  [Segments.BODY]: {
    information: Joi.string().required(),
    date_harvest: Joi.date().required(),
    gross_weight: Joi.number().required(),
    tree_id: Joi.string().uuid().required(),
  }
}),
harvestController.create);

export default harvestRouter;
