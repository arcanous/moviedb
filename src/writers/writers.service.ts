import { find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { WRITERS, MOVIES } from './../app.utils';
import { Writer } from './../app.model';

@Injectable()
export class WritersService {
  writers: Writer[];

  constructor() {
    this.writers = WRITERS;
  }

  getWriters() {
    return this.writers;
  }

  getWriter(id: string) {
    const writer = find(this.writers, { id });

    if (writer) {
      return {
        ...writer,
        movies: MOVIES.filter(({ writers }) => writers.includes(id)).map(({ id: movieId }) => movieId),
      };
    } else {
      return;
    }
  }
}
