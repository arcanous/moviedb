import { Injectable } from '@nestjs/common';
import { MOVIES } from '../app.utils';
import { Movie } from '../app.model';

@Injectable()
export class MoviesService {
  movies: Movie[];

  constructor() {
    this.movies = MOVIES;
  }

  getMovies() {
    return this.movies;
  }

}
