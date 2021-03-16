import { injectable, inject } from 'tsyringe';
import GroupTrees from '../infra/typeorm/entities/GroupTrees';
import IGroupTreesRepository from '../repositories/IGroupTreesRepository';
import ITreesRepository from '../repositories/ITreesRepository';
import IGroupRepository from '../repositories/IGroupRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  group_id: string;
  tree_id: string;
}

@injectable()
class CreateGroupTreeService {
  constructor(
    @inject('GroupTreesRepository')
    private groupTreesRepository: IGroupTreesRepository,

    @inject('TreesRepository')
    private treesRepository: ITreesRepository,

    @inject('GroupRepository')
    private groupRepository: IGroupRepository) {}

  public async execute({ group_id, tree_id }: IRequest): Promise<GroupTrees> {
    const tree = await this.treesRepository.findById(tree_id);

    if (!tree) {
      throw new AppError('Tree not found!');
    }

    const group = await this.groupRepository.findById(group_id);

    if (!group) {
      throw new AppError('Group not found!');
    }

    const existsGroupTree = await this.groupTreesRepository.findById({
      group_id,
      tree_id
    });

    if (existsGroupTree) {
      throw new AppError('Group of Trees already registered!');
    }

    const groupTree = await this.groupTreesRepository.create({
      group_id,
      tree_id
    });

    return groupTree;
  }
}

export default CreateGroupTreeService;
