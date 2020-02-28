import { find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { WRITERS, MOVIES, uuidv4 } from './../app.utils';
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

  addWriter({ name, birthYear, nationality }: Partial<Writer>) {
    let result;

    if (name && birthYear && nationality) {
      result = {
        id: uuidv4(),
        name,
        birthYear,
        nationality,
      };
      this.writers.push(result);
    }

    return result;
  }

  updateWriter(id: string, { name, birthYear, nationality }: Partial<Writer>) {
    const writer = find(this.writers, { id });

    if (name && birthYear && nationality && writer) {
      writer.name = name;
      writer.birthYear = birthYear;
      writer.nationality = nationality;
    }

    return writer;
  }

  deleteWriter(id: string) {
    const writer = find(this.writers, { id });

    if (writer) {
      this.writers = this.writers.filter(({ id: writerId }) => writerId !== id);
      MOVIES.forEach(movie => {
        movie.writers = movie.writers.filter(writerId => writerId !== id);
      });
      return true;
    } else {
      return;
    }
  }
}
