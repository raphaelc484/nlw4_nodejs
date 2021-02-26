import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

import { User } from './User';
import { Surveys } from './Surveys';

@Entity('surveys_users')
class SurveyUser {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  survey_id: string;

  @ManyToOne(() => Surveys)
  @JoinColumn({ name: 'survey_id' })
  survey: Surveys;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { SurveyUser };
