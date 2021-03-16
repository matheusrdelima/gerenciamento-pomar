import { getRepository, Repository } from 'typeorm';

import ITreesRepository from '@modules/trees/repositories/ITreesRepository';
import ITreesDTO from '@modules/trees/dtos/ITreesDTO';

import Trees from '../entities/Trees';

class TreesRepository implements ITreesRepository {
  private ormRepository: Repository<Trees>;

  constructor() {
    this.ormRepository = getRepository(Trees);
  }

  public async findById(tree_id: string): Promise<Trees | undefined> {
    const tree = await this.ormRepository.findOne(tree_id);

    return tree;
  }

  public async findOneTree(tree_id: string): Promise<Trees | undefined> {
    const tree = await this.ormRepository.findOne(tree_id, {
      relations: ['specie']
    });

    return tree;
  }

  public async findAllTrees(): Promise<Trees[]> {
    const trees = await this.ormRepository.find({
      relations: ['specie']
    });

    return trees;
  }

  public async create({ description, age, specie }: ITreesDTO): Promise<Trees> {
    const trees = this.ormRepository.create({
      description,
      age,
      specie
    });

    await this.ormRepository.save(trees);

    return trees;
  }
}

export default TreesRepository;
