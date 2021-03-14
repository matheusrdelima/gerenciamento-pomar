import { Router } from 'express';

import GroupController from '../controllers/GroupController';
import GroupTreeController from '../controllers/GroupTreeController';

const groupRouter = Router();
const groupController = new GroupController();
const groupTreeController = new GroupTreeController();

groupRouter.post('/', groupController.create);
groupRouter.post('/tree', groupTreeController.create);

export default groupRouter;
