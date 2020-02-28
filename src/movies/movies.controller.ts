import { Controller, Get, Param, NotFoundException, Post, Body, BadRequestException, Delete, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '../app.model';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  /*
   * MOVIE CRUD
   */

  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Post()
  addMovie(@Body() movie: Partial<Movie>) {
    const result = this.moviesService.addMovie(movie);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
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

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: Partial<Movie>) {
    const result = this.moviesService.updateMovie(id, movie);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    const result = this.moviesService.deleteMovie(id);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }

  /*
   * MOVIE ACTORS CRUD
   */

  @Get(':id/actors')
  listActors(@Param('id') id: string) {
    const result = this.moviesService.listActors(id);

    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  @Post(':id/actors')
  addActor(@Param('id') id: string, @Body('id') actorId: string) {
    const result = this.moviesService.addActor(id, actorId);

    if (result) {
      return { actorId };
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id/actors/:actorId')
  removeActor(@Param('id') id: string, @Param('actorId') actorId: string) {
    const result = this.moviesService.removeActor(id, actorId);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }

}
