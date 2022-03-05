import './SideBar.scss';
import React from "react";
import List from "./List/List";

function SideBar(props) {
    return (
        <List lists={props.lists} colors={props.colors}/>
    )
}

export default SideBar;