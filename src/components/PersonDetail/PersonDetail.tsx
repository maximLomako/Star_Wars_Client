import React from "react";
import {useStyles} from "../../common/styles/styleForCard";
import {Card, CardContent, Typography} from "@material-ui/core";

interface PersonDetailType {
  name: string
  gender: string
  hairColor: string
  height: string
}

export const PersonDetail: React.FC<PersonDetailType> = (props) => {
  const {
    name,
    gender,
    hairColor,
    height
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          gender: {gender}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          hair color: {hairColor}
        </Typography>
        <Typography variant="body2" component="p">
          height: {height} centimeters
        </Typography>
      </CardContent>
    </Card>
  );
}