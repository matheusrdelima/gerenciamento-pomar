import AppError from '@shared/errors/AppError';
import FakeHarvestRepository from '../repositories/fakes/FakeHarvestRepository';
import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import CreateHarvestService from './CreateHarvestService';

let fakeHarvestRepository: FakeHarvestRepository;
let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let createHarvestService: CreateHarvestService;

describe('CreateHarvestService', () => {
  beforeEach(() => {
    fakeHarvestRepository = new FakeHarvestRepository();
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();
    createHarvestService = new CreateHarvestService(
      fakeHarvestRepository,
      fakeTreesRepository,
    );
  });

  it('should be able to create a new Harvest', async () => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_description',
    });

    const tree = await fakeTreesRepository.create({
      description: 'any_description',
      age: 150,
      specie
    });

    const harvest = await createHarvestService.execute({
      information: 'any_information',
      date_harvest: new Date(),
      gross_weight: 200.0,
      tree_id: tree.id
    });

    expect(harvest.information).toEqual('any_information');
    expect(harvest.gross_weight).toEqual(200.0);
    expect(harvest.tree.id).toEqual(tree.id);
  });

  it('should not be able to create a new Harvest without a tree', async () => {
    await expect(createHarvestService.execute({
      information: 'any_information',
      date_harvest: new Date(),
      gross_weight: 200.0,
      tree_id: 'any_tree_id'
    })).rejects.toBeInstanceOf(AppError);
  });
});
