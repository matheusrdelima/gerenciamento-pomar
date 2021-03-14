import IGroupTreesRepository from '@modules/trees/repositories/IGroupTreesRepository';
import IGroupTreeDTO from '@modules/trees/dtos/IGroupTreeDTO';

import GroupTrees from '../../infra/typeorm/entities/GroupTrees';

class FakeGroupTreesRepository implements IGroupTreesRepository {
  private groupTrees: GroupTrees[] = [];

  public async create({ group_id, tree_id }: IGroupTreeDTO): Promise<GroupTrees> {
    const groupTree = new GroupTrees();

    Object.assign(groupTree, { group_id, tree_id });

    this.groupTrees.push(groupTree);

    return groupTree;
  }
}

export default FakeGroupTreesRepository;
