import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import CreateGroupService from './CreateGroupService';

let fakeGroupRepository: FakeGroupRepository;
let createGroupService: CreateGroupService;

describe('CreateGroupService', () => {
  beforeEach(() => {
    fakeGroupRepository = new FakeGroupRepository();
    createGroupService = new CreateGroupService(
      fakeGroupRepository,
    );
  });

  it('should be able to create a new group', async () => {
    const group = await createGroupService.execute({
      name: 'any_name',
      description: 'any_description'
    });

    expect(group.name).toEqual('any_name');
    expect(group.description).toEqual('any_description');
  });
});
