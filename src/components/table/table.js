import React from "react";
import './table.style.css';
import {DragableDataList} from "../dragable-data-list/dragable-data-list";

export const Table = ({userData}) => {
    const columnsConfig = {
        email: {name: 'Email', flexGrow: 2},
        potatoes: {name: 'Potatoes', flexGrow: 1},
        tags: {name: 'Tags', flexGrow: 1},
        fullName: {name: 'Full name', flexGrow: 1},
        location: {name: 'Location', flexGrow: 1}
    };

    const getColumnNames = () => Object.keys(columnsConfig)
        .map(key=> columnsConfig[key])
        .map(cc => (<span key={cc.name} style={{flexGrow: cc.flexGrow}} className="column-name-cell">{cc.name}</span>))

    const getTagTemplate = (tags) => (tags.map(t=> <span className="tags">{t}</span>));

    const getEmailTemplate = (email) => (
        <div className="email-data">
            <input type="checkbox"/>
            <span className="email" style={{flexGrow: 1}}>{email}</span>
            <span style={{color: '#999999'}}>></span>
        </div>
    );

    const rowTemplate = (item)=> (
        <div className="row-template">
            <span className="row-cell" style={{flexGrow: columnsConfig.email.flexGrow}} >{getEmailTemplate(item.email)}</span>
            <span className="row-cell" style={{flexGrow: columnsConfig.potatoes.flexGrow}}>{item.potatoes}</span>
            <span className="row-cell" style={{flexGrow: columnsConfig.tags.flexGrow}}>{getTagTemplate(item.tags)}</span>
            <span className="row-cell" style={{flexGrow: columnsConfig.fullName.flexGrow}}>{item.name}</span>
            <span className="row-cell" style={{flexGrow: columnsConfig.location.flexGrow}}>{item.location}</span>
            {/*{item.email}*/}
        </div>
    )

    return (
        <div className="table">
            <div className="header">
                <span>{userData.length || 0} people in the list</span>
            </div>
            <div className="column-names">
                {getColumnNames()}
            </div>
            <DragableDataList initialDataList={userData} rowTemplate={rowTemplate}/>
        </div>
    )
}
