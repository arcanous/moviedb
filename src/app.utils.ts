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
  {
    id: uuidv4(),
    name: 'Inglourious Basterds',
    year: 2009,
    plot: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. ' +
      'soldiers coincides with a theatre owner\'s vengeful plans for the same.',
    actors: [],
    directors: [],
    writers: [],
  },
  {
    id: uuidv4(),
    name: 'Django Unchained',
    year: 2012,
    plot: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
    actors: [],
    directors: [],
    writers: [],
  },
  {
    id: uuidv4(),
    name: 'Inception',
    year: 2010,
    plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is ' +
      'given the inverse task of planting an idea into the mind of a C.E.O.',
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
  {
    id: uuidv4(),
    name: 'Christoph Waltz',
    birthYear: 1956,
    nationality: 'Austrian',
  },
  {
    id: uuidv4(),
    name: 'Michael Fassbender',
    birthYear: 1977,
    nationality: 'British',
  },
  {
    id: uuidv4(),
    name: 'Jamie Foxx',
    birthYear: 1967,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Leonardo DiCaprio',
    birthYear: 1974,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Joseph Gordon-Levitt',
    birthYear: 1981,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Ellen Page',
    birthYear: 1987,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Tom Hardy',
    birthYear: 1977,
    nationality: 'British',
  },
];

MOVIES[0].actors = [ACTORS[0].id, ACTORS[1].id, ACTORS[2].id, ACTORS[3].id];
MOVIES[1].actors = [ACTORS[4].id, ACTORS[5].id, ACTORS[6].id];
MOVIES[2].actors = [ACTORS[5].id, ACTORS[7].id, ACTORS[8].id];
MOVIES[3].actors = [ACTORS[7].id, ACTORS[9].id, ACTORS[10].id];
MOVIES[4].actors = [ACTORS[10].id, ACTORS[11].id, ACTORS[12].id, ACTORS[13].id];

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
  {
    id: uuidv4(),
    name: 'Quentin Tarantino',
    birthYear: 1963,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Christopher Nolan',
    birthYear: 1970,
    nationality: 'American',
  },
];

MOVIES[0].directors = [DIRECTORS[0].id, DIRECTORS[1].id];
MOVIES[1].directors = [DIRECTORS[2].id];
MOVIES[2].directors = [DIRECTORS[3].id];
MOVIES[3].directors = [DIRECTORS[3].id];
MOVIES[4].directors = [DIRECTORS[4].id];

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
  {
    id: uuidv4(),
    name: 'Quentin Tarantino',
    birthYear: 1963,
    nationality: 'American',
  },
  {
    id: uuidv4(),
    name: 'Christopher Nolan',
    birthYear: 1970,
    nationality: 'American',
  },
];

MOVIES[0].writers = [WRITERS[0].id, WRITERS[1].id];
MOVIES[1].writers = [WRITERS[2].id, WRITERS[3].id];
MOVIES[2].writers = [WRITERS[4].id];
MOVIES[3].writers = [WRITERS[4].id];
MOVIES[4].writers = [WRITERS[5].id];
