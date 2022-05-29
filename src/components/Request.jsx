import React from "react";
import { useEffect, useState } from "react";
import List from "./List";

function Request() {
    const [items, setItems] = useState([]);
    const [isClick, setClick] = useState([]);
    const [arr, setArr] = useState([]);
    useEffect(() => {
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then((result) => {
                setItems(Object.assign({}, result));
            },
            );
    }, [])

    function click() {
        setClick(<List activity={items.activity} accessibility={items.accessibility} type={items.type} participants={items.participants} price={items.price} link={items.link} keys={items.key}/>)

    }

    return (
        <>
        <List e={click} activity={items.activity} accessibility={items.accessibility} type={items.type} participants={items.participants} price={items.price} link={items.link} keys={items.key}></List>
        <div>{isClick}</div>
        </>
    );
}


export default Request;