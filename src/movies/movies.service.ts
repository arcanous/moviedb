import { pick, find, keyBy } from 'lodash';
import { Injectable } from '@nestjs/common';
import { MOVIES, ACTORS, DIRECTORS, WRITERS, uuidv4 } from '../app.utils';
import { Movie } from '../app.model';

const ACTORS_ID_MAP = keyBy(ACTORS, 'id');
const DIRECTORS_ID_MAP = keyBy(DIRECTORS, 'id');
const WRITERS_ID_MAP = keyBy(WRITERS, 'id');

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
      return movie.actors.map(actorId => ACTORS_ID_MAP[actorId]);
    } else {
      return;
    }
  }

  addActor(id: string, actorId: string) {
    const movie = find(this.movies, { id });

    if (movie && actorId && !movie.actors.includes(actorId) && ACTORS_ID_MAP[actorId]) {
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

  /*
   * MOVIE DIRECRORS CRUD
   */

  listDirectors(id: string) {
    const movie = find(this.movies, { id });

    if (movie) {
      return movie.directors.map(directorId => DIRECTORS_ID_MAP[directorId]);
    } else {
      return;
    }
  }

  addDirector(id: string, directorId: string) {
    const movie = find(this.movies, { id });

    if (movie && directorId && !movie.directors.includes(directorId) && DIRECTORS_ID_MAP[directorId]) {
      movie.directors.push(directorId);
      return true;
    } else {
      return;
    }
  }

  removeDirector(id: string, directorId: string) {
    const movie = find(this.movies, { id });

    if (movie && movie.directors.includes(directorId)) {
      movie.directors = movie.directors.filter(did => did !== directorId);
      return true;
    } else {
      return;
    }
  }

  /*
   * MOVIE WRITERS CRUD
   */

  listWriters(id: string) {
    const movie = find(this.movies, { id });

    if (movie) {
      return movie.writers.map(writerId => WRITERS_ID_MAP[writerId]);
    } else {
      return;
    }
  }

  addWriter(id: string, writerId: string) {
    const movie = find(this.movies, { id });

    if (movie && writerId && !movie.writers.includes(writerId) && WRITERS_ID_MAP[writerId]) {
      movie.writers.push(writerId);
      return true;
    } else {
      return;
    }
  }

  removeWriter(id: string, writerId: string) {
    const movie = find(this.movies, { id });

    if (movie && movie.writers.includes(writerId)) {
      movie.writers = movie.writers.filter(wid => wid !== writerId);
      return true;
    } else {
      return;
    }
  }

}
