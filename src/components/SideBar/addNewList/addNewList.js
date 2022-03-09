import React from "react";

import './addNewList.scss'
import allTaskIcon from '../../../assets/img/app.svg'
import addList from '../../../assets/img/add.svg'

const AddNewList = ({state, qwe}) => {

    return (
            <li>
                <img src={addList}/>
                <span>Добавить список</span>
            </li>
    );
}

export default AddNewList;