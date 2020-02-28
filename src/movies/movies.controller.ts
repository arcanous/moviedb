import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
    const movie = this.moviesService.getMovie(id);

    if (movie) {
      return movie;
    } else {
      throw new NotFoundException();
    }
  }

}
