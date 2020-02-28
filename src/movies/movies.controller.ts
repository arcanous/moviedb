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

  /*
   * MOVIE DIRECORS CRUD
   */

  @Get(':id/directors')
  listDirectors(@Param('id') id: string) {
    const result = this.moviesService.listDirectors(id);

    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  @Post(':id/directors')
  addDirector(@Param('id') id: string, @Body('id') directorId: string) {
    const result = this.moviesService.addDirector(id, directorId);

    if (result) {
      return { directorId };
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id/directors/:directorId')
  removeDirector(@Param('id') id: string, @Param('directorId') directorId: string) {
    const result = this.moviesService.removeDirector(id, directorId);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }

  /*
   * MOVIE WRITERS CRUD
   */

  @Get(':id/writers')
  listWriters(@Param('id') id: string) {
    const result = this.moviesService.listWriters(id);

    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  @Post(':id/writers')
  addWriter(@Param('id') id: string, @Body('id') writerId: string) {
    const result = this.moviesService.addWriter(id, writerId);

    if (result) {
      return { writerId };
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id/writers/:writerId')
  removeWriter(@Param('id') id: string, @Param('writerId') writerId: string) {
    const result = this.moviesService.removeWriter(id, writerId);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }

}
