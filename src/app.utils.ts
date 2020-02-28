import { Movie, Actor, Director, Writer } from './app.model';

export const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0; // tslint:disable-line
  const v = c == 'x' ? r : (r & 0x3 | 0x8); // tslint:disable-line
  return v.toString(16);
});

export const MOVIES: Movie[] = [
  {
    id: uuidv4(),
    name: 'Matrix',
    year: 1999,
    plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    actors: [],
    directors: [],
    writers: [],
  },
  {
    id: uuidv4(),
    name: 'Fight club',
    year: 1999,
    plot: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    actors: [],
    directors: [],
    writers: [],
  },
];

export const ACTORS: Actor[] = [
  {
    id: uuidv4(),
    name: 'Keanu Reeves',
    birthYear: 1964,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Laurence Fishburne',
    birthYear: 1961,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Carrie-Anne Moss',
    birthYear: 1967,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Hugo Weaving',
    birthYear: 1960,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Edward Norton',
    birthYear: 1969,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Brad Pitt',
    birthYear: 1963,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Helena Bonham Carter',
    birthYear: 1966,
    nationality: 'American',
  },
];

MOVIES[0].actors = [ACTORS[0].id, ACTORS[1].id, ACTORS[2].id, ACTORS[3].id];
MOVIES[1].actors = [ACTORS[4].id, ACTORS[5].id, ACTORS[6].id];

export const DIRECTORS = [
  {
    id: uuidv4(),
    name: 'Lana Wachowski',
    birthYear: 1965,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Lilly Wachowski ',
    birthYear: 1967,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'David Fincher',
    birthYear: 1962,
    nationality: 'American',
  },
];

MOVIES[0].directors = [DIRECTORS[0].id, DIRECTORS[1].id];
MOVIES[1].directors = [DIRECTORS[2].id];

export const WRITERS = [
  {
    id: uuidv4(),
    name: 'Lana Wachowski',
    birthYear: 1965,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Lilly Wachowski ',
    birthYear: 1967,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Chuck Palahniuk',
    birthYear: 1962,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Jim Uhls',
    birthYear: 1957,
    nationality: 'American',
  },
];

MOVIES[0].writers = [WRITERS[0].id, WRITERS[1].id];
MOVIES[1].writers = [WRITERS[2].id, WRITERS[3].id];
