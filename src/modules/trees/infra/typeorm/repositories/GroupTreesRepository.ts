import { getRepository, Repository } from 'typeorm';

import IGroupTreesRepository from '@modules/trees/repositories/IGroupTreesRepository';
import IGroupTreeDTO from '@modules/trees/dtos/IGroupTreeDTO';

import GroupTrees from '../entities/GroupTrees';

class GroupTreesRepository implements IGroupTreesRepository {
  private ormRepository: Repository<GroupTrees>;

  constructor() {
    this.ormRepository = getRepository(GroupTrees);
  }

  public async create({ group_id, tree_id }: IGroupTreeDTO): Promise<GroupTrees> {
    const groupTree = this.ormRepository.create({
      group_id,
      tree_id
    });

    await this.ormRepository.save(groupTree);

    return groupTree;
  }
}

export default GroupTreesRepository;
