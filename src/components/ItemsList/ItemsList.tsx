import React from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {listItemsValueType} from "../../App";

interface ItemsListType {
  listItemsValue: Array<listItemsValueType>
}

export const ItemsList: React.FC<ItemsListType> = ({listItemsValue}) => {
  console.log(listItemsValue)
  return (
    <List>
      {listItemsValue.map((el, i) => <ListItem
        key={i}
        button
        onClick={() => {console.log(el.group)}}
      >
        <ListItemText primary={el.name}/>
        <ListItemText primary={el.group}/>
      </ListItem>)}
    </List>
  )
}