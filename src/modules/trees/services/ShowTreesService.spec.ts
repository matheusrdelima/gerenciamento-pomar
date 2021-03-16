import AppError from '@shared/errors/AppError';
import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import FakeTreesRepository from '../repositories/fakes/FakeTreesRepository';
import ShowTreesService from './ShowTreesService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let fakeTreesRepository: FakeTreesRepository;
let showTreesService: ShowTreesService;

describe('ShowTreesService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    fakeTreesRepository = new FakeTreesRepository();
    showTreesService = new ShowTreesService(
      fakeTreesRepository,
    );
  });

  it('should be able to find a Tree', async () => {
    const specie = await fakeSpeciesRepository.create({
      description: 'specie'
    });

    const tree = await fakeTreesRepository.create({
       description: 'any_description',
       age: 100,
       specie
     });

     const findTree = await showTreesService.execute({
       tree_id: tree.id
     });

    expect(tree.description).toEqual(findTree.description);
    expect(tree.age).toEqual(findTree.age);
    expect(tree.specie).toEqual(findTree.specie);
  });

  it('should not be able to find non existing Tree', async () => {
    await expect(showTreesService.execute({
      tree_id: 'non-existing-id',
    })).rejects.toBeInstanceOf(AppError);
  });
});
