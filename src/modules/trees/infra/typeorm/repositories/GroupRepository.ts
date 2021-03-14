import { getRepository, Repository } from 'typeorm';

import IGroupRepository from '@modules/trees/repositories/IGroupRepository';
import IGroupDTO from '@modules/trees/dtos/IGroupDTO';

import Group from '../entities/Group';

class GroupRepository implements IGroupRepository {
  private ormRepository: Repository<Group>;

  constructor() {
    this.ormRepository = getRepository(Group);
  }

  public async create({ name, description }: IGroupDTO): Promise<Group> {
    const group = this.ormRepository.create({
      name,
      description
    });

    await this.ormRepository.save(group);

    return group;
  }
}

export default GroupRepository;
