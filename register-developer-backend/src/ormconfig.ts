import { ConnectionOptions } from 'typeorm';

const ORMConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'pg_data',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  migrations: [__dirname + '/common/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/common/migrations',
  },
};

export = ORMConfig;
