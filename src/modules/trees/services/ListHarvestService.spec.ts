import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import FakeHarvestRepository from '../repositories/fakes/FakeHarvestRepository';
import ListHarvestService from './ListHarvestService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let fakeHarvestRepository: FakeHarvestRepository;
let listHarvestService: ListHarvestService;

describe('ListHarvestService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();
    fakeHarvestRepository = new FakeHarvestRepository();
    listHarvestService = new ListHarvestService(
      fakeHarvestRepository,
    );
  });

  it('should be able to list Harvests', async () => {
    const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
    });

    const tree = await fakeTreesRepository.create({
      description: 'any_description',
      age: 200,
      specie,
    });

    const harvest1 = await fakeHarvestRepository.create({
      tree,
      date_harvest: new Date(),
      gross_weight: 200,
      information: 'any_information',
    });

    const harvest2 = await fakeHarvestRepository.create({
      tree,
      date_harvest: new Date(),
      gross_weight: 250,
      information: 'any_information',
    });

    const listHarvests = await listHarvestService.execute();

    expect(listHarvests).toEqual([harvest1, harvest2]);
  });
});
