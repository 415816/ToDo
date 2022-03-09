import './SideBar.scss';
import React from "react";
import List from "./List/List";
import AddNewList from "./addNewList/addNewList";
import addListIcon from '../../assets/img/add.svg'
import allTaskIcon from "../../assets/img/app.svg";

function SideBar(props) {

    const newList = {
        "lists": [
            {
                "id": 99,
                "name": "Доавить список",
                "img": addListIcon,
            }]}

    const allLists = {
        "lists": [
            {
                "id": 15,
                "name": "Все задачи",
                "img": allTaskIcon,
            }]}



    return (
        <ul className={'todo__sideBar'}>
            <List state={props.state}/>
        </ul>
    )
}

export default SideBar;