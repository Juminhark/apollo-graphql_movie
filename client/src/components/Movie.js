import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ id, medium_cover_image }) {
  return (
    <div className='column is-one-fifth'>
      <Link to={`/${id}`}>
        <div
          className='has-background-dark card'
          style={{
            height: 350,
            backgroundImage: `url(${medium_cover_image})`,
            backgroundSize: 'cover',
            borderRadius: 5,
          }}
        ></div>
      </Link>
    </div>
  );
}

export default Movie;
