import { pick, find } from 'lodash';
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
    return this.movies.map(movie => pick(movie, ['id', 'name', 'year', 'plot']));
  }

  getMovie(id: string) {
    return find(this.movies, { id });
  }

}
