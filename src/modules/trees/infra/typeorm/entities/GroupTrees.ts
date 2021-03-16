import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('grouptrees')
class GroupTrees {
  @PrimaryColumn()
  group_id: string;

  @PrimaryColumn()
  tree_id: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}

export default GroupTrees;
