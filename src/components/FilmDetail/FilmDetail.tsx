import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import {useStyles} from "../../common/styles/styleForCard";

interface FilmDetailType {
  title: string
  director: string
  producer: string
  episodId: string
}


export  const FilmDetail:React.FC<FilmDetailType> = (props) => {
  const {
    title,
    director,
    producer,
    episodId
  } = props
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          director: {director}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          episodId: {episodId}
        </Typography>
        <Typography variant="body2" component="p">
          producer: {producer}
        </Typography>
      </CardContent>
    </Card>
  );
}
