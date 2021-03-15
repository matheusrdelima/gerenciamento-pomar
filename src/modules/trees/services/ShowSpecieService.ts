import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Species from '../infra/typeorm/entities/Species';
import ISpeciesRepository from '../repositories/ISpeciesRepository';

interface IRequest {
  specie_id: string;
}

@injectable()
class ShowSpecieService {
  constructor(
    @inject('SpeciesRepository')
    private speciesRepository: ISpeciesRepository) {}

  public async execute({ specie_id }: IRequest): Promise<Species> {
    const specie = await this.speciesRepository.findOneSpecie(specie_id);

    if (!specie) {
      throw new AppError('Specie not found!');
    }

    return specie;
  }
}

export default ShowSpecieService;
