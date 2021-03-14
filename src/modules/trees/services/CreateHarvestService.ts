import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Harvest from '../infra/typeorm/entities/Harvest';
import IHarvestRepository from '../repositories/IHarvestRepository';
import ITreesRepository from '../repositories/ITreesRepository';

interface IRequest {
  information: string;
  date_harvest: Date;
  gross_weight: number;
  tree_id: string;
}

@injectable()
class CreateHarvestService {
  constructor(
    @inject('HarvestRepository')
    private harvestRepository: IHarvestRepository,

    @inject('TreesRepository')
    private treesRepository: ITreesRepository,) {}

  public async execute({
    information,
    date_harvest,
    gross_weight,
    tree_id
  }: IRequest): Promise<Harvest> {
    const tree = await this.treesRepository.findById(tree_id);

    if (!tree) {
      throw new AppError('Tree not found!');
    }

    const harvest = await this.harvestRepository.create({
      information,
      date_harvest,
      gross_weight,
      tree
    });

    return harvest;
  }
}

export default CreateHarvestService;
