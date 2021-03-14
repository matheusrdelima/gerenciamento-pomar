import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateGroupService from '@modules/trees/services/CreateGroupService';

export default class GroupController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createGroupService = container.resolve(CreateGroupService);

    const group = await createGroupService.execute({
      name,
      description
     });

    return response.status(201).json(group);
  }
}
