import { Router } from 'express';

import GroupController from '../controllers/GroupController';

const groupRouter = Router();
const groupController = new GroupController();

groupRouter.post('/', groupController.create);

export default groupRouter;
