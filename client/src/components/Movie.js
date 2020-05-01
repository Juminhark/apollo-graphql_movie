import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: 430,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Movie({ id, title, rating, large_cover_image, summary }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={large_cover_image}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {title.length > 20 ? title.slice(0, 20) + '...' : title}
          </Typography>
          <Typography>
            {summary.length > 245 ? summary.slice(0, 245) + '...' : summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/${id}`}>
            <Button size='small' color='primary'>
              Detail
            </Button>
          </Link>
          <Button size='small' color='primary'>
            <Rating name='read-only' value={rating / 2} readOnly size='small' />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Movie;
