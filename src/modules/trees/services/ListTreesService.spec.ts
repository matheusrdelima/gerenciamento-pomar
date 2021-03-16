import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import ListTreesService from './ListTreesService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let listTreesService: ListTreesService;

describe('ListTreesService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();
    listTreesService = new ListTreesService(
      fakeTreesRepository,
    );
  });

  it('should be able to list Trees', async () => {
     const specie = await fakeSpeciesRepository.create({
      description: 'any_specie',
     });

     const tree1 = await fakeTreesRepository.create({
      description: 'any_tree1',
      age: 100,
      specie
     });

     const tree2 = await fakeTreesRepository.create({
      description: 'any_tree2',
      age: 200,
      specie
     });

     const listTrees = await listTreesService.execute();

    expect(listTrees).toEqual([tree1, tree2]);
  });
});
