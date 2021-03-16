import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Trees from './Trees';
import { Exclude } from 'class-transformer';

@Entity('species')
class Species {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToMany(() => Trees, trees => trees.specie, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'specie_id' })
  trees: Trees[];

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}

export default Species;
