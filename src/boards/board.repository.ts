// 레포지토리는 엔티티 개체와 함께 작동하며
// 엔티티 찾기, 삽입, 업데이트, 삭제 등을 처리
// DB와 관련된 것은 service가 아닌 repository에서 해줌

import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

// typeorm 0.2version
// 클래스를 사용자 정의 저장소로 선언하는 데 사용됨.
// 사용자 지정 저장소는 일부 특정 엔티티를 관리하거나
// 일반 저장소일 수 있다
// Board 엔티티를 관리하는 저장소로 설정
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  return;
}

// typeorm 0.3version
// import { Injectable } from '@nestjs/common';
// import { DataSource, Repository } from 'typeorm';
// import { Board } from './board.entity';

// @Injectable()
// export class BoardRepository extends Repository<Board> {
//   constructor(private dataSource: DataSource) {
//     super(Board, dataSource.createEntityManager());
//   }
// }
