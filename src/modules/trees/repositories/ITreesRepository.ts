import ITreesDTO from '@modules/trees/dtos/ITreesDTO';
import Trees from '../infra/typeorm/entities/Trees'

export default interface ITreesRepository {
  create(data: ITreesDTO): Promise<Trees>;
  findById(tree_id: string): Promise<Trees | undefined>;
  findOneTree(tree_id: string): Promise<Trees | undefined>;
}
