import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Movie from 'components/Movie';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='container'>
      {data.movies.map((movie) =>
        movie.medium_cover_image ? <Movie key={movie.id} {...movie} /> : null
      )}
    </div>
  );
};
