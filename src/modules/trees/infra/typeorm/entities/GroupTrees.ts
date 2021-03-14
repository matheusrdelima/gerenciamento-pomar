import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('grouptrees')
class GroupTrees {
  @PrimaryColumn()
  group_id: string;

  @PrimaryColumn()
  tree_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default GroupTrees;
