import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowSpecieService from '@modules/trees/services/ShowSpecieService';
import CreateSpeciesService from '@modules/trees/services/CreateSpeciesService';

export default class SpeciesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { specie_id } = request.params;

    const showSpecieService = container.resolve(ShowSpecieService);

    const specie = await showSpecieService.execute({
      specie_id
    });

    return response.json(specie);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createSpeciesService = container.resolve(CreateSpeciesService);

    const specie = await createSpeciesService.execute({ description });

    return response.status(201).json(specie);
  }
}
