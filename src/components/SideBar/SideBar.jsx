import './SideBar.scss';
import React from "react";
import List from "./List/List";

function SideBar(props) {
    return (
        <List state={props.state}/>
    )
}

export default SideBar;