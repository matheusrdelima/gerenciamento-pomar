import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Trees from '../infra/typeorm/entities/Trees';
import ITreesRepository from '../repositories/ITreesRepository';

interface IRequest {
  tree_id: string
}

@injectable()
class ShowTreesService {
  constructor(
    @inject('TreesRepository')
    private treesRepository: ITreesRepository,) {}

  public async execute({ tree_id }: IRequest): Promise<Trees> {

    const tree = await this.treesRepository.findOneTree(tree_id);

    if (!tree) {
      throw new AppError('Specie not found!')
    }

    return tree;
  }
}

export default ShowTreesService;
