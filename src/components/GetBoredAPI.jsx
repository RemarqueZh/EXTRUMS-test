import { useEffect, useState } from "react";

function GetBoredAPI() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((result) => {
        setItems(Object.assign({}, result));
      });
  }, []);

  return items;
}

export default GetBoredAPI;
