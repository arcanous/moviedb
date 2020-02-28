import { find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { DIRECTORS, MOVIES } from './../app.utils';
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
}
