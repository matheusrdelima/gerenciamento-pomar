import { container } from 'tsyringe';

import ISpeciesRepository from '@modules/trees/repositories/ISpeciesRepository';
import SpeciesRepository from '@modules/trees/infra/typeorm/repositories/SpeciesRepository';

import ITreesRepository from '@modules/trees/repositories/ITreesRepository';
import TreesRepository from '@modules/trees/infra/typeorm/repositories/TreesRepository';

import IGroupRepository from '@modules/trees/repositories/IGroupRepository';
import GroupRepository from '@modules/trees/infra/typeorm/repositories/GroupRepository';

container.registerSingleton<ISpeciesRepository>(
  'SpeciesRepository',
  SpeciesRepository,
);

container.registerSingleton<ITreesRepository>(
  'TreesRepository',
  TreesRepository,
);

container.registerSingleton<IGroupRepository>(
  'GroupRepository',
  GroupRepository,
);
