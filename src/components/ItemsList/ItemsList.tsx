import React from "react";
import {createStyles, ListItem, ListItemText, makeStyles, Theme} from "@material-ui/core";
import {listItemsValueType} from "../../App";
import s from './ItemsList.module.css'
import {dataAPI} from "../../api/api";

interface ItemsListType {
  listItemsValue: Array<listItemsValueType>
  selectItem: (group: string, name: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.default,
    },
  }),
);

export const ItemsList: React.FC<ItemsListType> = ({listItemsValue, selectItem}) => {
  const classes = useStyles();
  return (
    <div className={s.items}>
      {listItemsValue.map((el, i) =>
        <ListItem
          className={classes.root}
          key={i}
          button
          onClick={() => {
            selectItem(el.group, el.name)
          }}
        >
          <ListItemText primary={el.name}/>
          <ListItemText primary={el.group}/>
        </ListItem>)}
    </div>
  )
}