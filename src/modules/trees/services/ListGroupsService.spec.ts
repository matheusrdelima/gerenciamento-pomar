import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import ListGroupsService from './ListGroupsService';

let fakeGroupRepository: FakeGroupRepository;
let listGroupsService: ListGroupsService;

describe('ListGroupsService', () => {
  beforeEach(() => {
    fakeGroupRepository = new FakeGroupRepository();
    listGroupsService = new ListGroupsService(
      fakeGroupRepository,
    );
  });

  it('should be able to list Groups', async () => {
     const group1 = await fakeGroupRepository.create({
       name: 'group1',
       description: 'description',
     });

     const group2 = await fakeGroupRepository.create({
      name: 'group2',
      description: 'description',
    });

     const listGroups = await listGroupsService.execute();

    expect(listGroups).toEqual([group1, group2]);
  });
});
