import { v4 } from 'uuid';

import IGroupRepository from '@modules/trees/repositories/IGroupRepository';
import IGroupDTO from '@modules/trees/dtos/IGroupDTO';

import Group from '../../infra/typeorm/entities/Group';

class FakeGroupRepository implements IGroupRepository {
  private groups: Group[] = [];

  public async findById(group_id: string): Promise<Group | undefined> {
    const findGroup = this.groups.find(group => group.id === group_id);

    return findGroup;
  }

  public async create({ name, description }: IGroupDTO): Promise<Group> {
    const group = new Group();

    Object.assign(group, { id: v4(), name, description });

    this.groups.push(group);

    return group;
  }
}

export default FakeGroupRepository;
