import React, {useState} from "react";
import {NumberSelectorModal} from "../number-selector-modal/number-selector-modal";
import './start-sorting-button.style.css'



export const StartSortingButton = ({setNumber}) => {
    const [isModalOpen, setModalState] = useState(false);

    return (
        <div className="start-sorting-button">
            <button className="start-sorting-button" onClick={() => setModalState(true)}>Start Sorting</button>
            <NumberSelectorModal openModal={isModalOpen} setModalState={setModalState} setStartingNumber={setNumber}/>
        </div>
    )
}
