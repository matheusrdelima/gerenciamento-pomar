import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Harvest from '../infra/typeorm/entities/Harvest';
import IHarvestRepository from '../repositories/IHarvestRepository';

interface IRequest {
  harvest_id: string;
}

@injectable()
class ShowHarvestService {
  constructor(
    @inject('HarvestRepository')
    private harvestRepository: IHarvestRepository,) {}

  public async execute({ harvest_id }: IRequest): Promise<Harvest> {
    const harvest = await this.harvestRepository.findOneHarvest(harvest_id);

    if (!harvest) {
      throw new AppError('Harvest not found!');
    }

    return harvest;
  }
}

export default ShowHarvestService;
