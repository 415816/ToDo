import React from "react";

import allTaskIcon from '../../../assets/img/app.svg'

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
        </ul>
    );
}

export default List;