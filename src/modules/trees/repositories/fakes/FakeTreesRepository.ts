import { v4 } from 'uuid';

import ITreesRepository from '@modules/trees/repositories/ITreesRepository';
import ITreesDTO from '@modules/trees/dtos/ITreesDTO';

import Trees from '../../infra/typeorm/entities/Trees';

class FakeTreesRepository implements ITreesRepository {
  private trees: Trees[] = [];

  public async findById(tree_id: string): Promise<Trees | undefined> {
    const findTree = this.trees.find(tree => tree.id === tree_id);

    return findTree;
  }

  public async findOneTree(tree_id: string): Promise<Trees | undefined> {
    const findTree = this.trees.find(tree => tree.id === tree_id);

    return findTree;
  }

  public async findAllTrees(): Promise<Trees[]> {
    return this.trees;
  }

  public async create({ description, age, specie }: ITreesDTO): Promise<Trees> {
    const tree = new Trees();

    Object.assign(tree, { id: v4(), description, age, specie });

    this.trees.push(tree);

    return tree;
  }
}

export default FakeTreesRepository;
