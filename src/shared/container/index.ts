import { container } from 'tsyringe';

import ISpeciesRepository from '@modules/trees/repositories/ISpeciesRepository';
import SpeciesRepository from '@modules/trees/infra/typeorm/repositories/SpeciesRepository';

container.registerSingleton<ISpeciesRepository>(
  'SpeciesRepository',
  SpeciesRepository,
);
