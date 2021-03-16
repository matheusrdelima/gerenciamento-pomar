import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Species from './Species';
import { Exclude } from 'class-transformer';

@Entity('trees')
class Trees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  age: number;

  @ManyToOne(() => Species, species => species.trees)
  @JoinColumn({ name: 'specie_id' })
  specie: Species;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}

export default Trees;
