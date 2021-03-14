import IGroupDTO from '@modules/trees/dtos/IGroupDTO';
import Group from '../infra/typeorm/entities/Group'

export default interface IGroupRepository {
  create(data: IGroupDTO): Promise<Group>;
}
