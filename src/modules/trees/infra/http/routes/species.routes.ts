import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SpeciesController from '../controllers/SpeciesController';

const speciesRouter = Router();
const speciesController = new SpeciesController();

speciesRouter.get('/', speciesController.index);

speciesRouter.get('/:specie_id',
celebrate({
  [Segments.PARAMS]: {
    specie_id: Joi.string().uuid().required(),
  }
}),
speciesController.show);

speciesRouter.post('/',
celebrate({
  [Segments.BODY]: {
    description: Joi.string().required(),
  },
}),
speciesController.create);

export default speciesRouter;
