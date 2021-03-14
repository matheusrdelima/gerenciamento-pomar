import { container } from 'tsyringe';

import ISpeciesRepository from '@modules/trees/repositories/ISpeciesRepository';
import SpeciesRepository from '@modules/trees/infra/typeorm/repositories/SpeciesRepository';

import ITreesRepository from '@modules/trees/repositories/ITreesRepository';
import TreesRepository from '@modules/trees/infra/typeorm/repositories/TreesRepository';

container.registerSingleton<ISpeciesRepository>(
  'SpeciesRepository',
  SpeciesRepository,
);

container.registerSingleton<ITreesRepository>(
  'TreesRepository',
  TreesRepository,
);
