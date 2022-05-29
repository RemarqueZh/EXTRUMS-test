import React, { useState } from "react";
import List from "./List";
import BoredAPI from "./GetBodedAPI";


export default function RenderList(props) {
  let items = BoredAPI();
  let Box = (
    <List
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
   
  const [add, setAdd] = useState(()=>{
      const saved = localStorage.getItem('Box');
      const initialValue = JSON.parse(saved);
      if (localStorage.length == 0) return ''
      else return <List
      btnAdd={eventAdd}
      activity={initialValue.activity}
      accessibility={initialValue.accessibility}
      type={initialValue.type}
      participants={initialValue.participants}
      price={initialValue.price}
      link={initialValue.link}
      keys={initialValue.key}
    ></List>
  });


   
  function eventAdd() {
    setAdd(Box);
    localStorage.setItem('Box', JSON.stringify(items));

  }


  return (
    <div>
      {Box}
      <div>{add}</div>
    </div>
  );
  }


