import Trees from "@modules/trees/infra/typeorm/entities/Trees";

export default interface IHarvestDTO {
  information: string;
  date_harvest: Date;
  gross_weight: number;
  tree: Trees;
}
