import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListGroupTreeService from '@modules/trees/services/ListGroupTreeService';
import CreateGroupTreeService from '@modules/trees/services/CreateGroupTreeService';

export default class GroupTreeController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listGroupTreeService = container.resolve(ListGroupTreeService);

    const groupTrees = await listGroupTreeService.execute();

    return response.json(classToClass(groupTrees));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { group_id, tree_id } = request.body;

    const createGroupTreeService = container.resolve(CreateGroupTreeService);

    const groupTree = await createGroupTreeService.execute({
      group_id,
      tree_id
     });

    return response.status(201).json(classToClass(groupTree));
  }
}
