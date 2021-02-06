import React from "react";
import {useStyles} from "../../common/styles/styleForCard";
import {Card, CardContent, Typography} from "@material-ui/core";

interface FilmDetailType {
  name: string
  diameter: string
  rotationPeriod: string
  orbitalPeriod: string
}

export const PlanetDetail: React.FC<FilmDetailType> = (props) => {
  const {
    name,
    diameter,
    rotationPeriod,
    orbitalPeriod
  } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          diameter: {diameter} kilometers
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          rotation period: {rotationPeriod}
        </Typography>
        <Typography variant="body2" component="p">
          orbital period: {orbitalPeriod}
        </Typography>
      </CardContent>
    </Card>
  );
}