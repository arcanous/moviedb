import { pick, find, keyBy } from 'lodash';
import { Injectable } from '@nestjs/common';
import { MOVIES, ACTORS, uuidv4 } from '../app.utils';
import { Movie } from '../app.model';

const ACTORS_ID_MAP = keyBy(ACTORS, 'id');

@Injectable()
export class MoviesService {
  movies: Movie[];

  constructor() {
    this.movies = MOVIES;
  }

  /*
   * MOVIE CRUD
   */

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

  /*
   * MOVIE ACTORS CRUD
   */

  listActors(id: string) {
    const movie = find(this.movies, { id });

    if (movie) {
      return movie.actors.map(actorId => ACTORS_ID_MAP[actorId]);;
    } else {
      return;
    }
  }

  addActor(id: string, actorId: string) {
    const movie = find(this.movies, { id });

    if (movie && actorId && !movie.actors.includes(actorId)) {
      movie.actors.push(actorId);
      return true;
    } else {
      return;
    }
  }

  removeActor(id: string, actorId: string) {
    const movie = find(this.movies, { id });

    if (movie && movie.actors.includes(actorId)) {
      movie.actors = movie.actors.filter(aid => aid !== actorId);
      return true;
    } else {
      return;
    }
  }

}
