import { getRepository, Repository } from 'typeorm';

import ISpeciesRepository from '@modules/trees/repositories/ISpeciesRepository';
import ISpeciesDTO from '@modules/trees/dtos/ISpeciesDTO';

import Species from '../entities/Species';

class SpeciesRepository implements ISpeciesRepository {
  private ormRepository: Repository<Species>;

  constructor() {
    this.ormRepository = getRepository(Species);
  }

  public async create({ description }: ISpeciesDTO): Promise<Species> {
    const species = this.ormRepository.create({
      description
    });

    await this.ormRepository.save(species);

    return species;
  }
}

export default SpeciesRepository;
