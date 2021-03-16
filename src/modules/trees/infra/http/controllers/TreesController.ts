import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTreesService from '@modules/trees/services/ListTreesService';
import ShowTreesService from '@modules/trees/services/ShowTreesService';
import CreateTreesService from '@modules/trees/services/CreateTreesService';

export default class TreesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTreesService = container.resolve(ListTreesService);

    const trees = await listTreesService.execute();

    return response.json(trees);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { tree_id } = request.params;

    const showSpecieService = container.resolve(ShowTreesService);

    const tree = await showSpecieService.execute({
      tree_id
    });

    return response.json(tree);
  }

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
