import { injectable, inject } from 'tsyringe';
import Harvest from '../infra/typeorm/entities/Harvest';
import IHarvestRepository from '../repositories/IHarvestRepository';

@injectable()
class ListHarvestService {
  constructor(
    @inject('HarvestRepository')
    private harvestRepository: IHarvestRepository,) {}

  public async execute(): Promise<Harvest[]> {
    const harvests = await this.harvestRepository.findAllSpecies();

    return harvests;
  }
}

export default ListHarvestService;
