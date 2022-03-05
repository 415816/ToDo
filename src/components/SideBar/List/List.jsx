import React from "react";

const List = ({lists, colors}) => {
    return (
        <ul className={'todo__sideBar'}>
            <li>Все задачи</li>
            {lists.map((i, colors) =>
                <li key={i.id}>
                    <div className={`point &--${colors.id}`}>1</div>
                    {i.name}
                </li>)}
        </ul>
    );
}

export default List;