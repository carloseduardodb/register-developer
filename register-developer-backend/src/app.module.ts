import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig } from './ormconfig';
import { DevelopersModule } from './developer/developer.module';
import { LevelsModule } from './level/level.module';

@Module({
  imports: [TypeOrmModule.forRoot(ORMConfig), DevelopersModule, LevelsModule],
})
export class AppModule {}
