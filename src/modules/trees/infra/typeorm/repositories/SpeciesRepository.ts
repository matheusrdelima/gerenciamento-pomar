import { getRepository, Repository } from 'typeorm';

import ISpeciesRepository from '@modules/trees/repositories/ISpeciesRepository';
import ISpeciesDTO from '@modules/trees/dtos/ISpeciesDTO';

import Species from '../entities/Species';

class SpeciesRepository implements ISpeciesRepository {
  private ormRepository: Repository<Species>;

  constructor() {
    this.ormRepository = getRepository(Species);
  }

  public async findById(specie_id: string): Promise<Species | undefined> {
    const specie = await this.ormRepository.findOne(specie_id);

    return specie;
  }

  public async findOneSpecie(specie_id: string): Promise<Species | undefined> {
    const specie = await this.ormRepository.findOne(specie_id);

    return specie;
  }

  public async findAllSpecies(): Promise<Species[]> {
    return this.ormRepository.find();
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
