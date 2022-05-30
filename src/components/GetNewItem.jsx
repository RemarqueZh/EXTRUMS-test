import React, { useState } from "react";
import GetBoredAPI from "./GetBoredAPI";
import List from "./List";
import LStorage from "./LStorage";

function GetNewItem() {
  let items = GetBoredAPI();
  let component = (
    <List
      btnUpdate={reload}
      btnAdd={eventAdd}
      activity={items.activity}
      accessibility={items.accessibility}
      type={items.type}
      participants={items.participants}
      price={items.price}
      link={items.link}
      keys={items.key}
      key={items.key}
    ></List>
  );

  const [item, setItems] = useState(LStorage);

  function reload() {
    window.location.reload();
  }

  function eventAdd() {
    const newArray = [...item, component];
    setItems([newArray]);
    localStorage.setItem("Box", JSON.stringify(items));
  }

  return (
    <div>
      <h1>Choose fresh ideas to do</h1>
      <div className="item">{component}</div>
      <h1>Ideas in my list</h1>
      <div className="AddedItem">{item}</div>
    </div>
  );
}

export default GetNewItem;
