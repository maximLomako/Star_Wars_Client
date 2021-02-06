import React from "react";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

interface StarshipDetailType {
  row1: string
  row2: string
  row3: string
  row4: string
}

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const CardInfo: React.FC<StarshipDetailType> = (props) => {
  const {row1, row2, row3, row4} = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           {row2}
        </Typography>
        <Typography variant="h5" component="h2">
          {row1}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
           {row3}
        </Typography>
        <Typography variant="body2" component="p">
           {row4}
        </Typography>
      </CardContent>
    </Card>
  );
}