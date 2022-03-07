import React from "react";

import './List.scss'
import allTaskIcon from '../../../assets/img/app.svg'
import addList from '../../../assets/img/add.svg'

const List = ({state}) => {
    return (
        <ul className={'todo__sideBar'}>
            <li>
                <img src={allTaskIcon}/>
                <span>Все задачи</span></li>

            {state.lists.map(i =>
                <li key={i.id}>
                    <div className={`point point__${state.colors[i.id].name}`}></div>
                    <span>{i.name}</span>
                </li>)}

            <li>
                <img src={addList}/>
                <span>Добавить список</span></li>
        </ul>
    );
}

export default List;