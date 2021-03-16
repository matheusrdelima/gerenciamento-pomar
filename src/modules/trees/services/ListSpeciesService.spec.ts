import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import ListSpeciesService from './ListSpeciesService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let listSpeciesService: ListSpeciesService;

describe('ListSpeciesService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    listSpeciesService = new ListSpeciesService(
      fakeSpeciesRepository,
    );
  });

  it('should be able to list Species', async () => {
     const specie1 = await fakeSpeciesRepository.create({
       description: 'any_description_1',
     });

     const specie2 = await fakeSpeciesRepository.create({
      description: 'any_description_2',
    });

     const listSpecies = await listSpeciesService.execute();

    expect(listSpecies).toEqual([specie1, specie2]);
  });
});
