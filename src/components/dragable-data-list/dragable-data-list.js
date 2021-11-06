import React, {useEffect, useState} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import './dragable-data-list.style.css';

export const DragableDataList = ({initialDataList, rowTemplate, onChange}) => {
    const [dataList, setDataList] = useState(initialDataList);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const {source, destination} = result;
        const reorderedData = reorder(dataList, source.index, destination.index)
        setDataList(reorderedData);
        onChange(reorderedData);
    }

    useEffect(()=> {setDataList(initialDataList)}, [initialDataList])

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} id="draggable-data-list">
                        {dataList.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={snapshot.isDragging ? 'dragging-row data-row' : 'data-row'}
                                        style={provided.draggableProps.style}
                                    >
                                        {rowTemplate(item)}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
