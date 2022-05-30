import React from "react";
import List from "./List";

export default function LStorage() {
  const saved = localStorage.getItem("Box");
  const initialValue = JSON.parse(saved);
  if (localStorage.length === 0) return [];
  else
    return [
      <List
        activity={initialValue.activity}
        accessibility={initialValue.accessibility}
        type={initialValue.type}
        participants={initialValue.participants}
        price={initialValue.price}
        link={initialValue.link}
        keys={initialValue.key}
      ></List>,
    ];
}
