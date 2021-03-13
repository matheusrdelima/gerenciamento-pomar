import { Request, Response } from 'express';

import CreateSpeciesService from '@modules/trees/services/CreateSpeciesService';
import SpeciesRepository from '@modules/trees/infra/typeorm/repositories/SpeciesRepository';

export default class SpeciesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const speciesRepository = new SpeciesRepository();

    const createSpeciesService = new CreateSpeciesService(
      speciesRepository,
    );

    const specie = await createSpeciesService.execute({ description });

    return response.status(201).json(specie);
  }
}
