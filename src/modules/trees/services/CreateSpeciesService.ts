import Species from '../infra/typeorm/entities/Species';
import ISpeciesRepository from '../repositories/ISpeciesRepository';

interface IRequest {
  description: string;
}

class CreateSpeciesService {
  constructor(private speciesRepository: ISpeciesRepository) {}

  public async execute({ description }: IRequest): Promise<Species> {
    const specie = await this.speciesRepository.create({
      description
    });

    return specie;
  }
}

export default CreateSpeciesService;
