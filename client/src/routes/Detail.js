import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, CardMedia, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const GET_MOVIE = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_full
      language
      large_cover_image
      genres
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  media: {
    height: '120vh',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default () => {
  const classes = useStyles();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  });

  if (loading) return <p>Loading...!</p>;
  if (error) return <p>Error :(</p>;

  const {
    title,
    description_full,
    language,
    large_cover_image,
    genres,
    rating,
  } = data.movie;
  return (
    <Paper className={classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <CardMedia
              className={classes.media}
              image={large_cover_image}
              title={title}
            />
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              {title}
            </Typography>
            <Rating name='read-only' value={rating / 2} readOnly size='large' />
            <Typography variant='h5' color='inherit' paragraph>
              {language}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {genres.map((genre) => ' * ' + genre)}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {description_full}
            </Typography>
            <Link to='/'>
              <Button variant='contained'>back</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
