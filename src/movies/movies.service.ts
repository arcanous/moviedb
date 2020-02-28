import { pick, find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { MOVIES, uuidv4 } from '../app.utils';
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

  addMovie({ name, plot, year }: Partial<Movie>) {
    let result;

    if (name && plot && year) {
      result = {
        id: uuidv4(),
        name,
        plot,
        year,
        actors: [],
        directors: [],
        writers: [],
      };
      this.movies.push(result);
    }

    return result;
  }

  updateMovie(id: string, { name, plot, year }: Partial<Movie>) {
    const movie = find(this.movies, { id });
    console.log('update', { name, plot, year })
    if (name && plot && year && movie) {
      movie.name = name;
      movie.plot = plot;
      movie.year = year;
    }

    return movie;
  }

  deleteMovie(id: string) {
    const movie = find(this.movies, { id });

    if (movie) {
      this.movies = this.movies.filter(({ id: movieId }) => movieId !== id);
      return true;
    } else {
      return;
    }
  }

}
