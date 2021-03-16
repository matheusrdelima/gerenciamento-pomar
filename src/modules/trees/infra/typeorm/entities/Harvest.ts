import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Trees from './Trees';
import { Exclude } from 'class-transformer';

@Entity('harvest')
class Harvest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  information: string;

  @Column()
  date_harvest: Date;

  @Column()
  gross_weight: number;

  @ManyToOne(() => Trees)
  @JoinColumn({ name: 'tree_id' })
  tree: Trees;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}

export default Harvest;
