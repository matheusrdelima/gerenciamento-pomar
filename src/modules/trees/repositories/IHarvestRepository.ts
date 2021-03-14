import IHarvestDTO from '@modules/trees/dtos/IHarvestDTO';
import Harvest from '../infra/typeorm/entities/Harvest'

export default interface IHarvestRepository {
  create(data: IHarvestDTO): Promise<Harvest>;
}
