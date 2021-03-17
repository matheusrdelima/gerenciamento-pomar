import { getRepository, Repository } from 'typeorm';

import IGroupTreesRepository from '@modules/trees/repositories/IGroupTreesRepository';
import IGroupTreeDTO from '@modules/trees/dtos/IGroupTreeDTO';

import GroupTrees from '../entities/GroupTrees';

class GroupTreesRepository implements IGroupTreesRepository {
  private ormRepository: Repository<GroupTrees>;

  constructor() {
    this.ormRepository = getRepository(GroupTrees);
  }

  public async findAllGroupTrees(): Promise<GroupTrees[]> {
    const groupTrees =
      await this.ormRepository.query(`
      select
        "grouptrees".group_id "group_id",
        "group".name          "group_name",
        "group".description   "group_description",
        "grouptrees".tree_id  "tree_id",
        "trees".description   "tree_description",
        "trees".age           "tree_age",
        "trees".specie_id     "specie_id",
        "species".description "specie_description"
      from "grouptrees"
        inner join "group"
      on ("group".id = "grouptrees".group_id)
        inner join "trees"
      on ("trees".id = "grouptrees".tree_id)
        inner join "species"
      on ("species".id = "trees".specie_id)`);
    return groupTrees;
  }

  public async findById({
    group_id,
    tree_id }:
    IGroupTreeDTO): Promise<GroupTrees | undefined> {
    const groupTree = await this.ormRepository.findOne({
      where: {
        group_id,
        tree_id
      }
    });

    return groupTree;
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
