import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSpeciesService from '@modules/trees/services/CreateSpeciesService';

export default class SpeciesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createSpeciesService = container.resolve(CreateSpeciesService);

    const specie = await createSpeciesService.execute({ description });

    return response.status(201).json(specie);
  }
}
