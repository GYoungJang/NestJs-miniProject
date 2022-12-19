import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ebxnfl12!',
  database: 'board-app',
  // 엔티티를 이용해서 데이터베이스 테이블 생성
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
