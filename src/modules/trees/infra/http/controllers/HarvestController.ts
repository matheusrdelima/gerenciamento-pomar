import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListHarvestService from '@modules/trees/services/ListHarvestService';
import ShowHarvestService from '@modules/trees/services/ShowHarvestService';
import CreateHarvestService from '@modules/trees/services/CreateHarvestService';

export default class HarvestController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listHarvestService = container.resolve(ListHarvestService);

    const harvests = await listHarvestService.execute();

    return response.json(classToClass(harvests));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { harvest_id } = request.params;

    const showHarvestService = container.resolve(ShowHarvestService);

    const harvest = await showHarvestService.execute({
      harvest_id
    });

    return response.json(classToClass(harvest));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { information,
            date_harvest,
            gross_weight,
            tree_id
          } = request.body;

    const createHarvestService = container.resolve(CreateHarvestService);

    const harvest = await createHarvestService.execute({
      information,
      date_harvest,
      gross_weight,
      tree_id
    });

    return response.status(201).json(classToClass(harvest));
  }
}
