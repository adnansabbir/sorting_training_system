import React, {useState} from "react";
import Modal from "react-modal";
import './number-selector-modal.style.css';

Modal.setAppElement('#root');

export const NumberSelectorModal = ({openModal, setModalState, setStartingNumber}) => {
    const [inputValue, setInputValue] = useState(0);

    const handleValueChange = (e) => {
        setInputValue(parseInt(e.target.value, 10));
    }

    const handleSubmit = () => {
        setStartingNumber(inputValue)
    }

    return (
        <Modal
            isOpen={openModal}
            className="Modal"
            overlayClassName="Overlay"
            onRequestClose={() => setModalState(false)}>

            <div className="header">
                <h1 className="title">How many people?</h1>
                <span className="cross-icon" onClick={() => setModalState(false)}>X</span>
            </div>
            <div className="body">
                <p className="description text-dark-gray">Enter a number of how many people you want to add to the list.</p>
                <input className="input-box" type="number" value={inputValue} onChange={handleValueChange}/>
            </div>
            <div className="button-group">
                <button className="button bg-light-gray text-dark-gray" onClick={() => setModalState(false)}>Cancel</button>
                <button className="button bg-orange text-white" onClick={handleSubmit}>Start</button>
            </div>
        </Modal>
    )
}
