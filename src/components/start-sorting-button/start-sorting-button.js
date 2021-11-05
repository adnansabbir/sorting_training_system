import React, {useState} from "react";
import {NumberSelectorModal} from "../number-selector-modal/number-selector-modal";



export const StartSortingButton = ({setNumber}) => {
    const [isModalOpen, setModalState] = useState(false);

    return (
        <div className="start-sorting-button">
            <button onClick={() => setModalState(true)}>Start</button>
            <NumberSelectorModal openModal={isModalOpen} setModalState={setModalState} setStartingNumber={setNumber}/>
        </div>
    )
}
