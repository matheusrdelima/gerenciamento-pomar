import { injectable, inject } from 'tsyringe';
import Group from '../infra/typeorm/entities/Group';
import IGroupRepository from '../repositories/IGroupRepository';

@injectable()
class ListGroupsService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository) {}

  public async execute(): Promise<Group[]> {
    const groups = await this.groupRepository.findAllGroups();

    return groups;
  }
}

export default ListGroupsService;
