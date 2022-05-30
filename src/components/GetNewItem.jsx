import React, { useState } from "react";
import GetBoredAPI from "./GetBoredAPI";
import List from "./List";

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
    ></List>
  );

  const [item, setItem] = useState(() => {
    const saved = localStorage.getItem("Box");
    const initialValue = JSON.parse(saved);
    if (localStorage.length === 0) return "";
    else
      return (
        <List
          activity={initialValue.activity}
          accessibility={initialValue.accessibility}
          type={initialValue.type}
          participants={initialValue.participants}
          price={initialValue.price}
          link={initialValue.link}
          keys={initialValue.key}
        ></List>
      );
  });
  function reload() {
    window.location.reload();
  }
  function eventAdd() {
    setItem(Object.assign(component));
    localStorage.setItem("Box", JSON.stringify(items));
  }
  return (
    <div>
      {component}
      {item}
    </div>
  );
}

export default GetNewItem;
