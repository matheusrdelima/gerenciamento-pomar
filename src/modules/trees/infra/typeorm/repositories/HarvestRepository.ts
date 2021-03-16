import { getRepository, Repository } from 'typeorm';

import IHarvestRepository from '@modules/trees/repositories/IHarvestRepository';
import IHarvestDTO from '@modules/trees/dtos/IHarvestDTO';

import Harvest from '../entities/Harvest';

class HarvestRepository implements IHarvestRepository {
  private ormRepository: Repository<Harvest>;

  constructor() {
    this.ormRepository = getRepository(Harvest);
  }

  public async findOneHarvest(id: string): Promise<Harvest | undefined> {
    const harvest = await this.ormRepository.findOne(id);

    return harvest;
  }

  public async findAllSpecies(): Promise<Harvest[]> {
    const harvests = await this.ormRepository.find();

    return harvests;
  }

  public async create({
    information,
    gross_weight,
    date_harvest,
    tree
  }: IHarvestDTO): Promise<Harvest> {
    const harvest = this.ormRepository.create({
      information,
      gross_weight,
      date_harvest,
      tree
    });

    await this.ormRepository.save(harvest);

    return harvest;
  }
}

export default HarvestRepository;
