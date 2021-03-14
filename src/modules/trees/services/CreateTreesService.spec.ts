import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import CreateTreesService from './CreateTreesService';
import AppError from '@shared/errors/AppError';

let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let createTreesService: CreateTreesService;

describe('CreateTreesService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();

    createTreesService = new CreateTreesService(
      fakeTreesRepository,
      fakeSpeciesRepository,
    );
  });

  it('should be able to create a new tree', async () => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
    });

    const tree = await createTreesService.execute({
      description: 'any_tree',
      age: 150,
      specie_id: specie.id
    });

    expect(tree.description).toEqual('any_tree');
    expect(tree.age).toEqual(150);
    expect(tree.specie.id).toEqual(specie.id);
  });

  it('should not be able to create without a specie', async () => {
    await expect(createTreesService.execute({
      description: 'any_description',
      age: 150,
      specie_id: 'any_specie_id'
    })).rejects.toBeInstanceOf(AppError)
  });
});
