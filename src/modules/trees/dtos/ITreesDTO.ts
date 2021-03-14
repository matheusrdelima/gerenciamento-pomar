import Species from '@modules/trees/infra/typeorm/entities/Species';

export default interface ITreesDTO {
  description: string;
  age: number;
  specie: Species;
}
