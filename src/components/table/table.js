import React from "react";
import './table.style.css';

export const Table = ({userData}) => {
    console.log(userData);

    const columnsConfig = {
        email: {name: 'Email', flexGrow: 2, borderRight: true},
        potatoes: {name: 'Potatoes', flexGrow: 1},
        tags: {name: 'Tags', flexGrow: 1},
        fullName: {name: 'Full name', flexGrow: 1},
        location: {name: 'Location', flexGrow: 1}
    };

    const getColumnNames = () => Object.keys(columnsConfig)
        .map(key=> columnsConfig[key])
        .map(cc => (<span style={{flexGrow: cc.flexGrow}} className="column-name-cell">{cc.name}</span>))

    return (
        <div className="table">
            <div className="header">
                <span>{userData.length || 0} people in the list</span>
            </div>
            <div className="column-names">
                {getColumnNames()}
            </div>
        </div>
    )
}
