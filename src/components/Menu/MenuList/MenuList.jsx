import React from "react";
import ListItem from './ListItem';
import './MenuList.css';

const MenuList = ({subpoints}) => {

    const elements = subpoints.map(subpoint => {
        return(<li key={subpoint.id}><ListItem label ={subpoint.name} path = {subpoint.path}/></li>);
    });

    return(
        <ul>
            {elements}
        </ul>
    )
};

export default MenuList;
