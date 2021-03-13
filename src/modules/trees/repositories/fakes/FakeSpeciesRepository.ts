import { v4 } from 'uuid';

import ISpeciesRepository from '@modules/trees/repositories/ISpeciesRepository';
import ISpeciesDTO from '@modules/trees/dtos/ISpeciesDTO';

import Species from '../../infra/typeorm/entities/Species';

class FakeSpeciesRepository implements ISpeciesRepository {
  private species: Species[] = [];

  public async create({ description }: ISpeciesDTO): Promise<Species> {
    const specie = new Species();

    Object.assign(specie, { id: v4(), description });

    this.species.push(specie);

    return specie;
  }
}

export default FakeSpeciesRepository;
