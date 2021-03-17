import { injectable, inject } from 'tsyringe';
import GroupTrees from '../infra/typeorm/entities/GroupTrees';
import IGroupTreesRepository from '../repositories/IGroupTreesRepository';

@injectable()
class ListGroupTreeService {
  constructor(
    @inject('GroupTreesRepository')
    private groupTreesRepository: IGroupTreesRepository,) {}

  public async execute(): Promise<GroupTrees[]> {
    const groupTrees = await this.groupTreesRepository.findAllGroupTrees();

    return groupTrees;
  }
}

export default ListGroupTreeService;
