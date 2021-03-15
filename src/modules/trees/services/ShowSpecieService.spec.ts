import AppError from '@shared/errors/AppError';
import FakeSpeciesRepository from '../repositories/fakes/FakeSpeciesRepository';
import ShowSpecieService from './ShowSpecieService';

let fakeSpeciesRepository: FakeSpeciesRepository;
let showSpecieService: ShowSpecieService;

describe('ShowSpecieService', () => {
  beforeEach(() => {
    fakeSpeciesRepository = new FakeSpeciesRepository();
    showSpecieService = new ShowSpecieService(
      fakeSpeciesRepository,
    );
  });

  it('should be able to find a Specie', async () => {
     const specie = await fakeSpeciesRepository.create({
       description: 'any_description',
     });

     const findSpecie = await showSpecieService.execute({
       specie_id: specie.id
     });

    expect(specie).toEqual(findSpecie);
  });

  it('should not be able to find non existing Specie', async () => {
    await expect(showSpecieService.execute({
      specie_id: 'non-existing-id',
    })).rejects.toBeInstanceOf(AppError);
  });
});
