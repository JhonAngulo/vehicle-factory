import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: '#17a9fc',
    color: 'white'
  },
  header: {
    margin: 0,
    padding: 10,
    color: 'white'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#505254',
  },
}));

export default function CardDetailt({ data }) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data.order.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={data.order.toUpperCase()}
      />

      <CardContent>
        <Typography variant="body2" component="p">
          {`Cliente: ${data.client}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Fecha: ${data.date}`}
        </Typography>

      </CardContent>

    </Card>
  );
}
