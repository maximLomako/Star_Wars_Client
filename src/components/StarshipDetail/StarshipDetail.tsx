import React from "react";
import {useStyles} from "../../common/styles/styleForCard";
import {Card, CardContent, Typography} from "@material-ui/core";

interface StarshipDetailType {
  name: string
  consumables: string
  crew: string
  manufacturer: string
}

export const StarshipDetail: React.FC<StarshipDetailType> = (props) => {
  const {
    name,
    consumables,
    crew,
    manufacturer
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          consumables: {consumables}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          crew: {crew}
        </Typography>
        <Typography variant="body2" component="p">
          manufacturer: {manufacturer}
        </Typography>
      </CardContent>
    </Card>
  );
}