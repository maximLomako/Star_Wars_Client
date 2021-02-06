import React from "react";
import {createStyles, ListItem, ListItemText, makeStyles, Theme} from "@material-ui/core";
import {listItemsValueType} from "../../App";
import s from './ItemsList.module.css'

interface ItemsListType {
  inputValue: string
  listItemsValue: Array<listItemsValueType>
  selectItem: (group: string, name: string) => void
  hideItemList: () => void
  changeInputValue: (newValue: string) => void
  getHighlightedText : (text: string, highlight: string) => any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '300px',
      maxWidth: 360,
      backgroundColor: theme.palette.background.default,
    },
  }),
);

export const ItemsList: React.FC<ItemsListType> = (props) => {
  const {inputValue, listItemsValue, selectItem, hideItemList, changeInputValue, getHighlightedText} = props;
  const classes = useStyles();
  return (
    <div className={s.items}>
      {listItemsValue.map((el, i) =>
        <ListItem
          className={classes.root}
          key={i}
          button
          onClick={() => {
            selectItem(el.group, el.name);
            changeInputValue('');
            hideItemList();
          }}
        >
          <ListItemText primary={getHighlightedText(el.name, inputValue)}/>
          <ListItemText  primary={el.group}/>
        </ListItem>)}
    </div>
  )
}