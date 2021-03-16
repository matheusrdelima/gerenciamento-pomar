import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowGroupService from '@modules/trees/services/ShowGroupService';
import CreateGroupService from '@modules/trees/services/CreateGroupService';

export default class GroupController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { group_id } = request.params;

    const showGroupService = container.resolve(ShowGroupService);

    const group = await showGroupService.execute({
      group_id
    });

    return response.json(group);
  }

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
