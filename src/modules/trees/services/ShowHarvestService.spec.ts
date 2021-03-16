import AppError from '@shared/errors/AppError';
import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import FakeHarvestRepository from '../repositories/fakes/FakeHarvestRepository';
import ShowHarvestService from './ShowHarvestService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let fakeHarvestRepository: FakeHarvestRepository;
let showHarvestService: ShowHarvestService;

describe('ShowHarvestService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();
    fakeHarvestRepository = new FakeHarvestRepository();
    showHarvestService = new ShowHarvestService(
      fakeHarvestRepository,
    );
  });

  it('should be able to find a Harvest', async () => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
    });

    const tree = await fakeTreesRepository.create({
      description: 'any_description',
      age: 200,
      specie,
    });

    const harvest = await fakeHarvestRepository.create({
      tree,
      date_harvest: new Date(),
      gross_weight: 200,
      information: 'any_information',
    });

    const findHarvest = await showHarvestService.execute({
      harvest_id: harvest.id,
    });

    expect(harvest).toEqual(findHarvest);
  });

  it('should not be able to find non existing Harvest', async () => {
    await expect(showHarvestService.execute({
      harvest_id: 'non-existing-id',
    })).rejects.toBeInstanceOf(AppError);
  });
});
