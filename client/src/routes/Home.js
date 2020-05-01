import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Movie from 'components/Movie';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Slider,
  Box,
  Toolbar,
  Container,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  toolbarSecondary: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },

  toolbarItem: {
    width: 230,
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const GET_MOVIES = gql`
  query Movies($limit: Int, $rating: Float) {
    movies(limit: $limit, minimum_rating: $rating) {
      id
      title
      rating
      large_cover_image
      summary
    }
  }
`;

export default () => {
  const classes = useStyles();

  const [limit, setLimit] = useState(50);
  const [rating, setRating] = useState(7);

  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: {
      limit,
      rating,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleSliderChange = (event, newLimit) => {
    setLimit(newLimit);
  };
  const handelRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <div className={classes.content}>
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Movie App
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            using yts api. movie list
          </Typography>
        </Container>
      </div>

      <Toolbar
        component='nav'
        variant='dense'
        className={classes.toolbarSecondary}
      >
        <Grid
          container
          spacing={1}
          direction='row'
          justify='space-evenly'
          alignItems='center'
        >
          <Grid item xs={12} sm={6}>
            {/* limit-slider */}
            <div className={classes.toolbarItem}>
              <Typography id='limit-slider' gutterBottom>
                Limit
              </Typography>
              <Slider
                defaultValue={50}
                aria-labelledby='discrete-slider'
                valueLabelDisplay='auto'
                step={5}
                marks
                min={10}
                max={50}
                value={limit}
                onChange={handleSliderChange}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Rating */}
            <div className={classes.toolbarItem}>
              <Box component='fieldset' mb={3} borderColor='transparent'>
                <Typography component='legend' gutterBottom>
                  Rating
                </Typography>
                <Rating
                  name='simple-controlled'
                  defaultValue={7}
                  max={10}
                  value={rating}
                  onChange={handelRatingChange}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Toolbar>

      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {data.movies.map((movie) =>
            movie.large_cover_image ? <Movie key={movie.id} {...movie} /> : null
          )}
        </Grid>
      </Container>
    </>
  );
};
