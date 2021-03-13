import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import CreateSpeciesService from './CreateSpeciesService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let createSpeciesService: CreateSpeciesService;

describe('CreateSpeciesService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    createSpeciesService = new CreateSpeciesService(
      fakeSpeciesRepository,
    );
  });

  it('should be able to create a new specie', async () => {
    const specie = await createSpeciesService.execute({
      description: 'any_description'
    });

    expect(specie.description).toEqual('any_description');
  });
});
