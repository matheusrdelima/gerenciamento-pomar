import { injectable, inject } from 'tsyringe';
import Trees from '../infra/typeorm/entities/Trees';
import ITreesRepository from '../repositories/ITreesRepository';

@injectable()
class ListTreesService {
  constructor(
    @inject('TreesRepository')
    private treesRepository: ITreesRepository,) {}

  public async execute(): Promise<Trees[]> {
    const trees = await this.treesRepository.findAllTrees();

    return trees;
  }
}

export default ListTreesService;
