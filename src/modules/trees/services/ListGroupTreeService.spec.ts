import FakeGroupTreesRepository from '../repositories/fakes/FakeGroupTreesRepository';
import ListGroupTreeService from './ListGroupTreeService';

let fakeGroupTreesRepository: FakeGroupTreesRepository;
let listGroupTreeService: ListGroupTreeService;

describe('ListGroupTreeService', () => {
  beforeEach(() => {
    fakeGroupTreesRepository = new FakeGroupTreesRepository();
    listGroupTreeService = new ListGroupTreeService(
      fakeGroupTreesRepository,
    );
  });

  it('should be able to list Group of Trees', async () => {
     const GroupTree1 = await fakeGroupTreesRepository.create({
      group_id: 'any_group_1',
      tree_id: 'any_tree_1'
     });

     const GroupTree2 = await fakeGroupTreesRepository.create({
      group_id: 'any_group_2',
      tree_id: 'any_tree_2'
     });

     const listGroupTree = await listGroupTreeService.execute();

    expect(listGroupTree).toEqual([GroupTree1, GroupTree2]);
  });
});
