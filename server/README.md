# apollo-graphql-movie-server

## Step 1 : Init

```sh
yarn init
```

## Step 2 : Install Dependencies

- [`graphql-yoga`](https://github.com/prisma-labs/graphql-yoga)

```sh
yarn add graphql-yoga
```

```sh
yarn add nodemon babel-cli babel-preset-env babel-preset-stage-3 --dev
```

### babel - [reference](https://jaeyeophan.github.io/2017/05/16/Everything-about-babel/)

```ts
// .babelrc
{
 "presets": ["env", "stage-3"]
}

// package.json
{
 ...
 "scripts": {
   "start": "nodemon --exec babel-node src/index.js"
 }
 ...
}
```

## Step 3 : Define your GraphQL schema

```ts
// schema.graphql
type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
}

type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
}

```

## Step 4 : Define your data set

- [YTS.mx - API](https://yts.mx/api)

```ts
// db.js
import axios from 'axios';

const BASE_URL = 'https://yts-proxy.now.sh/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
```

## Step 5 : Define your resolver

```ts
// resolvers.js
import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;

// db.js
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
```

## Step 6 : Create an instance of GraphqlServer with graphql-yoga

```ts
// server.js
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

const options = {
  port: 4000,
};

server.start(options, ({ port }) =>
  console.log(`🚀 GraphQL Server started, http://localhost:${port}`)
);
```

## Step 7 : Start the Server

```sh
yarn start
```
