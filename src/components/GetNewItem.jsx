import React, { useState } from "react";
import GetBodedAPI from "./GetBodedAPI";
import List from "./List";

function GetNewItem (props) {
const [el, setEl] = useState();
let items = GetBodedAPI();
let elem=
  <List
    btnAdd={props.eventAdd}
    activity={items.activity}
    accessibility={items.accessibility}
    type={items.type}
    participants={items.participants}
    price={items.price}
    link={items.link}
    keys={items.key}
  ></List>
setEl(elem)
return el;
}


export default GetNewItem;