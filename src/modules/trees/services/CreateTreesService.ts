import { injectable, inject } from 'tsyringe';
import Trees from '../infra/typeorm/entities/Trees';
import ITreesRepository from '../repositories/ITreesRepository';
import ISpeciesRepository from '../repositories/ISpeciesRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  description: string;
  age: number;
  specie_id: string
}

@injectable()
class CreateTreesService {
  constructor(
    @inject('TreesRepository')
    private treesRepository: ITreesRepository,

    @inject('SpeciesRepository')
    private speciesRepository: ISpeciesRepository,) {}

  public async execute({ description, age, specie_id }: IRequest): Promise<Trees> {

    const specie = await this.speciesRepository.findById(specie_id);

    if (!specie) {
      throw new AppError('Specie not found!')
    }

    const tree = await this.treesRepository.create({
      description,
      age,
      specie
    });

    return tree;
  }
}

export default CreateTreesService;
