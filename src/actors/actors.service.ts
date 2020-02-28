import { find } from 'lodash';
import { Injectable } from '@nestjs/common';
import { ACTORS, MOVIES, uuidv4 } from './../app.utils';
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

  addActor({ name, birthYear, nationality }: Partial<Actor>) {
    let result;

    if (name && birthYear && nationality) {
      result = {
        id: uuidv4(),
        name,
        birthYear,
        nationality,
      };
      this.actors.push(result);
    }

    return result;
  }

  updateActor(id: string, { name, birthYear, nationality }: Partial<Actor>) {
    const actor = find(this.actors, { id });

    if (name && birthYear && nationality && actor) {
      actor.name = name;
      actor.birthYear = birthYear;
      actor.nationality = nationality;
    }

    return actor;
  }

  deleteActor(id: string) {
    const actor = find(this.actors, { id });

    if (actor) {
      this.actors = this.actors.filter(({ id: actorId }) => actorId !== id);
      MOVIES.forEach(movie => {
        movie.actors = movie.actors.filter(actorId => actorId !== id);
      });
      return true;
    } else {
      return;
    }
  }
}
