import { injectable, inject } from 'tsyringe';
import Species from '../infra/typeorm/entities/Species';
import ISpeciesRepository from '../repositories/ISpeciesRepository';

@injectable()
class ListSpecieService {
  constructor(
    @inject('SpeciesRepository')
    private speciesRepository: ISpeciesRepository) {}

  public async execute(): Promise<Species[]> {
    const species = await this.speciesRepository.findAllSpecies();

    return species;
  }
}

export default ListSpecieService;
