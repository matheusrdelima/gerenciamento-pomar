import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateHarvestService from '@modules/trees/services/CreateHarvestService';

export default class HarvestController {
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

    return response.status(201).json(harvest);
  }
}
