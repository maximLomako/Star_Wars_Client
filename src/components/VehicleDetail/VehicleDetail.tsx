import React from "react";
import {useStyles} from "../../common/styles/styleForCard";
import {Card, CardContent, Typography} from "@material-ui/core";

interface StarshipDetailType {
  name: string
  model: string
  vehicleClass: string
  manufacturer: string
}

export const VehicleDetail: React.FC<StarshipDetailType> = (props) => {
  const {
    name,
    model,
    vehicleClass,
    manufacturer
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          model: {model}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          vehicle class: {vehicleClass}
        </Typography>
        <Typography variant="body2" component="p">
          manufacturer: {manufacturer}
        </Typography>
      </CardContent>
    </Card>
  );
}