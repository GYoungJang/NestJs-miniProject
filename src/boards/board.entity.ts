import { BoardStatus } from './board-status.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 테이블 변환
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
