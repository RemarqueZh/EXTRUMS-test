import React from "react";
import { useEffect, useState } from "react";
import RenderList from "./RenderList";
import Box from "./RenderList";

function AddItem() {
  const [refresh, setRefresh] = useState([]);
  function update() {
    setRefresh(<RenderList />);
  }

  return (
    <>
      <RenderList btnUpdate={update}></RenderList>
      <div>{refresh}</div>
    </>
  );
}

export default AddItem;
