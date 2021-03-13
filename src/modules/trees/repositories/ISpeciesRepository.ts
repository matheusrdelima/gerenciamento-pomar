import ISpeciesDTO from '@modules/trees/dtos/ISpeciesDTO';
import Species from '../infra/typeorm/entities/Species'

export default interface ISpeciesRepository {
  create(data: ISpeciesDTO): Promise<Species>;
}
