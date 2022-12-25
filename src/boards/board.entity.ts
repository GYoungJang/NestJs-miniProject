import { BoardStatus } from './board-status.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 테이블 변환
// Entity 데코레이터는 Board 클래스가 엔티티임을 나타냄
// CREATE TABLE Board 뜻함
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  // id 열이 Board 엔티티의 기본 키열임을 나타냄
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
