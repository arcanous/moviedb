import { find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { ACTORS, MOVIES } from './../app.utils';
import { Actor } from './../app.model';

@Injectable()
export class ActorsService {
  actors: Actor[];

  constructor() {
    this.actors = ACTORS;
  }

  getActors() {
    return this.actors;
  }

  getActor(id: string) {
    const actor = find(this.actors, { id });

    if (actor) {
      return {
        ...actor,
        movies: MOVIES.filter(({ actors }) => actors.includes(id)).map(({ id: movieId }) => movieId),
      };
    } else {
      return;
    }
  }
}
