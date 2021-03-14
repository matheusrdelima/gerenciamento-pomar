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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Species;
