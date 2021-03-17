import IGroupTreeDTO from '@modules/trees/dtos/IGroupTreeDTO';
import GroupTrees from '../infra/typeorm/entities/GroupTrees'

export default interface IGroupTreesRepository {
  create(data: IGroupTreeDTO): Promise<GroupTrees>;
  findById(data: IGroupTreeDTO): Promise<GroupTrees | undefined>;
  findAllGroupTrees(): Promise<GroupTrees[]>;
}
