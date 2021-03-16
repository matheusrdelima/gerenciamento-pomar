import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import GroupController from '../controllers/GroupController';
import GroupTreeController from '../controllers/GroupTreeController';

const groupRouter = Router();
const groupController = new GroupController();
const groupTreeController = new GroupTreeController();

groupRouter.get('/:group_id',
celebrate({
  [Segments.PARAMS]: {
    group_id: Joi.string().uuid().required(),
  }
}),
groupController.show);

groupRouter.post('/',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    description: Joi.string().required(),
  },
}),
groupController.create);

groupRouter.post('/tree',
celebrate({
  [Segments.BODY]: {
    group_id: Joi.string().uuid().required(),
    tree_id: Joi.string().uuid().required(),
  }
}),
groupTreeController.create);

export default groupRouter;
