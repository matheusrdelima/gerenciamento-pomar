import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import FakeGroupTreesRepository from '../repositories/fakes/FakeGroupTreesRepository';
import CreateGroupTreeService from './CreateGroupTreeService';
import AppError from '@shared/errors/AppError';

let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let fakeGroupRepository: FakeGroupRepository;
let fakeGroupTreesRepository: FakeGroupTreesRepository;
let createGroupTreeService: CreateGroupTreeService;

describe('CreateGroupTreeService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();
    fakeGroupRepository = new FakeGroupRepository();

    fakeGroupTreesRepository = new FakeGroupTreesRepository();
    createGroupTreeService = new CreateGroupTreeService(
      fakeGroupTreesRepository,
      fakeTreesRepository,
      fakeGroupRepository,
    );
  });

  it('should be able to create a new group of trees', async () => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
    });

    const tree = await fakeTreesRepository.create({
      description: 'any_tree',
      age: 200,
      specie,
    });

    const group = await fakeGroupRepository.create({
      description: 'any_description',
      name: 'any_name',
    });

    const groupTree = await createGroupTreeService.execute({
      group_id: group.id,
      tree_id: tree.id
    });

    expect(groupTree.group_id).toEqual(group.id);
    expect(groupTree.tree_id).toEqual(tree.id);
  });

  it('should not be able to create a new group of trees without a group', async() => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
    });

    const tree = await fakeTreesRepository.create({
      description: 'any_tree',
      age: 200,
      specie,
    });

    await expect(createGroupTreeService.execute({
      group_id: 'any_group_id',
      tree_id: tree.id
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new group of trees without a tree', async() => {
    const group = await fakeGroupRepository.create({
      description: 'any_description',
      name: 'any_name',
    });

    await expect(createGroupTreeService.execute({
      group_id: group.id,
      tree_id: 'any_tree'
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new Group of Trees already registered', async() => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
    });

    const tree = await fakeTreesRepository.create({
      description: 'any_tree',
      age: 200,
      specie,
    });

    const group = await fakeGroupRepository.create({
      description: 'any_description',
      name: 'any_name',
    });

    await createGroupTreeService.execute({
      group_id: group.id,
      tree_id: tree.id
    });

    await expect(createGroupTreeService.execute({
      group_id: group.id,
      tree_id: tree.id
    })).rejects.toBeInstanceOf(AppError);
  });
});
