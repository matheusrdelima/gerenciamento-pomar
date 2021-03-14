import { injectable, inject } from 'tsyringe';
import Group from '../infra/typeorm/entities/Group';
import IGroupRepository from '../repositories/IGroupRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateGroupService {
  constructor(
    @inject('GroupRepository')
    private groupRepository: IGroupRepository) {}

  public async execute({ name, description }: IRequest): Promise<Group> {
    const group = await this.groupRepository.create({
      name,
      description
    });

    return group;
  }
}

export default CreateGroupService;
