import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Group from '../infra/typeorm/entities/Group';
import IGroupRepository from '../repositories/IGroupRepository';

interface IRequest {
  group_id: string;
}

@injectable()
class ShowGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository) {}

  public async execute({ group_id }: IRequest): Promise<Group> {
    const group = await this.groupRepository.findOneGroup(group_id);

    if (!group) {
      throw new AppError('Group not found!');
    }

    return group;
  }
}

export default ShowGroupService;
