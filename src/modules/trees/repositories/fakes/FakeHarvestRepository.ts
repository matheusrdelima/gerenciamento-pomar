import { v4 } from 'uuid';

import IHarvestRepository from '@modules/trees/repositories/IHarvestRepository';
import IHarvestDTO from '@modules/trees/dtos/IHarvestDTO';

import Harvest from '../../infra/typeorm/entities/Harvest';

class FakeHarvestRepository implements IHarvestRepository {
  private harvests: Harvest[] = [];

  public async findOneHarvest(id: string): Promise<Harvest | undefined> {
    const harvest = this.harvests.find(harvest => harvest.id === id);

    return harvest;
  }

  public async create({
    information,
    date_harvest,
    gross_weight,
    tree
  }: IHarvestDTO): Promise<Harvest> {
    const harvest = new Harvest();

    Object.assign(harvest, {
      id: v4(),
      information,
      date_harvest,
      gross_weight,
      tree
    });

    this.harvests.push(harvest);

    return harvest;
  }
}

export default FakeHarvestRepository;
