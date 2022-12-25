import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ebxnfl12!',
  database: 'board-app',
  // 엔티티를 이용해서 데이터베이스 테이블 생성하기 때문에
  // 엔티티 파일이 어디에 있는지 설정해줘야함.
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // true일 경우 앱을 다시 실행할 때 엔티티 안에서 수정된 컬럼의 길이 타입 변경값 등이 있는 경우
  // 해당 테이블을 drop하고 다시 생성
  synchronize: true,
};
