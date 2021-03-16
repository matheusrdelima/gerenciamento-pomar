import AppError from '@shared/errors/AppError';
import FakeGroupRepository from '../repositories/fakes/FakeGroupRepository';
import ShowGroupService from './ShowGroupService';

let fakeGroupRepository: FakeGroupRepository;
let showGroupService: ShowGroupService;

describe('ShowGroupService', () => {
  beforeEach(() => {
    fakeGroupRepository = new FakeGroupRepository();
    showGroupService = new ShowGroupService(
      fakeGroupRepository,
    );
  });

  it('should be able to find a Group', async () => {
     const group = await fakeGroupRepository.create({
       name: 'any_group',
       description: 'any_description',
     });

     const findGroup = await showGroupService.execute({
       group_id: group.id,
     });

     expect(group).toEqual(findGroup);
  });

  it('should not be able to find non existing Group', async () => {
    await expect(showGroupService.execute({
      group_id: 'non-existing-id',
    })).rejects.toBeInstanceOf(AppError);
  });
});
