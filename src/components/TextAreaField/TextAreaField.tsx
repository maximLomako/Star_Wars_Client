import React, {ChangeEvent} from "react";
import {createStyles, makeStyles, TextField, Theme} from "@material-ui/core";

interface TextAreaFieldType {
  value: string
  changeInputValue: (newValue: string) => void
  hideSelectedItem: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        width: '300px',
        backgroundColor: theme.palette.background.default,
        padding: '5px'
      },
    },
  }),
);

export const TextAreaField: React.FC<TextAreaFieldType> = (props) => {
  const classes = useStyles();
  const {value, changeInputValue, hideSelectedItem} = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(e.currentTarget.value)
    hideSelectedItem();
  }

  return (
    <TextField
      className={classes.root}
      value={value}
      onChange={onChangeHandler}
      placeholder='input text here'
    />
  )
}