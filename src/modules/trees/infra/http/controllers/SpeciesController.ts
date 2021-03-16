import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ShowSpecieService from '@modules/trees/services/ShowSpecieService';
import ListSpeciesService from '@modules/trees/services/ListSpeciesService';
import CreateSpeciesService from '@modules/trees/services/CreateSpeciesService';

export default class SpeciesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSpeciesService = container.resolve(ListSpeciesService);

    const species = await listSpeciesService.execute();

    return response.json(classToClass(species));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { specie_id } = request.params;

    const showSpecieService = container.resolve(ShowSpecieService);

    const specie = await showSpecieService.execute({
      specie_id
    });

    return response.json(classToClass(specie));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createSpeciesService = container.resolve(CreateSpeciesService);

    const specie = await createSpeciesService.execute({ description });

    return response.status(201).json(classToClass(specie));
  }
}
