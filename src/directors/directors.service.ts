import { find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { DIRECTORS, MOVIES, uuidv4 } from './../app.utils';
import { Director } from './../app.model';

@Injectable()
export class DirectorsService {
  directors: Director[];

  constructor() {
    this.directors = DIRECTORS;
  }

  getDirectors() {
    return this.directors;
  }

  getDirector(id: string) {
    const director = find(this.directors, { id });

    if (director) {
      return {
        ...director,
        movies: MOVIES.filter(({ directors }) => directors.includes(id)).map(({ id: movieId }) => movieId),
      };
    } else {
      return;
    }
  }

  addDirector({ name, birthYear, nationality }: Partial<Director>) {
    let result;

    if (name && birthYear && nationality) {
      result = {
        id: uuidv4(),
        name,
        birthYear,
        nationality,
      };
      this.directors.push(result);
    }

    return result;
  }

  updateDirector(id: string, { name, birthYear, nationality }: Partial<Director>) {
    const director = find(this.directors, { id });

    if (name && birthYear && nationality && director) {
      director.name = name;
      director.birthYear = birthYear;
      director.nationality = nationality;
    }

    return director;
  }

  deleteDirector(id: string) {
    const director = find(this.directors, { id });

    if (director) {
      this.directors = this.directors.filter(({ id: directorId }) => directorId !== id);
      MOVIES.forEach(movie => {
        movie.directors = movie.directors.filter(directorId => directorId !== id);
      });
      return true;
    } else {
      return;
    }
  }
}
