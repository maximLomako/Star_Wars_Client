import React, {ReactNode} from "react";
import {createStyles, ListItem, ListItemText, makeStyles, Theme} from "@material-ui/core";
import {ListItemsValueType} from "../../App";
import s from './ItemsList.module.css'

interface ItemsListType {
  inputValue: string
  listItemsValue: Array<ListItemsValueType>
  selectItem: (element: ListItemsValueType) => void
  hideItemList: () => void
  changeInputValue: (newValue: string) => void
  getHighlightedText : (text: string, highlight: string) => ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '300px',
      maxWidth: 360,
      backgroundColor: theme.palette.background.default,
    }
  }),
);

const ListItemTextStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'end'
    }
  }),
);

export const ItemsList: React.FC<ItemsListType> = (props) => {
  const {inputValue, listItemsValue, selectItem, hideItemList, changeInputValue, getHighlightedText} = props;
  const classes = useStyles();
  const listItemTextClass = ListItemTextStyles();
  return (
    <div className={s.items}>
      {listItemsValue.map((el, i) =>
        <ListItem
          className={classes.root}
          key={i}
          button
          onClick={() => {
            selectItem(el);
            changeInputValue('');
            hideItemList();
          }}
        >
          <ListItemText primary={getHighlightedText(el.name || el.title || '', inputValue)}/>
          <ListItemText className={listItemTextClass.root} primary={el.group}/>
        </ListItem>)}
    </div>
  )
}