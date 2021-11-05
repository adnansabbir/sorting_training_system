import React, {useState} from "react";
import Modal from "react-modal";
import './number-selector-modal.style.css';

Modal.setAppElement('#root');

const INITIAL_VALUE = {value: '', invalid: true};

export const NumberSelectorModal = ({openModal, setModalState, setStartingNumber}) => {
    const [inputValue, setInputValue] = useState(INITIAL_VALUE);

    const handleValueChange = (e) => {
        const value = e.target.value;
        const data = {value, invalid: (!value || +value < 20 || +value > 100)}
        setInputValue(data);
    }

    const handleSubmit = () => {
        if (inputValue.invalid) return;
        setStartingNumber(+inputValue);
        closeModal();
    }

    const closeModal = () => {
        setInputValue(INITIAL_VALUE);
        setModalState(false);
    };

    return (
        <Modal
            isOpen={openModal}
            className="Modal"
            overlayClassName="Overlay"
            onRequestClose={() => setModalState(false)}>

            <div className="header">
                <h1 className="title">How many people?</h1>
                <span className="cross-icon" onClick={closeModal}>X</span>
            </div>
            <div className="body">
                <p className="description text-dark-gray">
                    Enter a number of how many people you want to add to the list.
                </p>
                <input
                    placeholder="Enter a number between 20 to 100"
                    className="input-box"
                    type="number"
                    value={inputValue.value} onChange={handleValueChange}
                    min={20} max={100}/>
            </div>
            <div className="button-group">
                <button
                    className="button bg-light-gray text-dark-gray"
                    onClick={closeModal}>
                    Cancel
                </button>
                <button
                    className="button bg-orange text-white"
                    onClick={handleSubmit}
                    disabled={inputValue.invalid}>
                    Start
                </button>
            </div>
        </Modal>
    )
}
