import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginBottom: 20,
  },
  header: {
    padding: 10,
    color: theme.palette.primary.dark
  }
}));

const CardTitle = ({ children, text }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        action={children}
        title={text}
      />
    </Card>
  );
}

export default CardTitle