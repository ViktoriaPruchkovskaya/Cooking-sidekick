import React from "react";
import ListItem from './ListItem';

const MenuList = ({subpoints}) => {

    const elements = subpoints.map(subpoint => {
        return(<li key={subpoint.id}><ListItem label ={subpoint}/></li>);
    });

    return(
        <ul>
            {elements}
        </ul>
    )
};

export default MenuList;
