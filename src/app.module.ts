import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { DirectorsModule } from './directors/directors.module';
import { WritersModule } from './writers/writers.module';

@Module({
  imports: [MoviesModule, ActorsModule, DirectorsModule, WritersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
