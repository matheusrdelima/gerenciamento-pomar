import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTreesService from '@modules/trees/services/CreateTreesService';

export default class TreesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, age, specie_id } = request.body;

    const createTreesService = container.resolve(CreateTreesService);

    const trees = await createTreesService.execute({
      description,
      age,
      specie_id
    });

    return response.status(201).json(trees);
  }
}
