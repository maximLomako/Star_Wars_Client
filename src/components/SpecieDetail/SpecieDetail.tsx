import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import {useStyles} from "../../common/styles/styleForCard";

interface StarshipDetailType {
  name: string
  classification: string
  designation: string
  averageHeight: string
}



export const SpecieDetail: React.FC<StarshipDetailType> = (props) => {
  const {
    name,
    classification,
    designation,
    averageHeight
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          classification: {classification}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          designation: {designation}
        </Typography>
        <Typography variant="body2" component="p">
          average height: {averageHeight}
        </Typography>
      </CardContent>
    </Card>
  );
}
