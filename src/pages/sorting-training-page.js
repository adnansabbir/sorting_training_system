import React, {useState} from "react";
import './sorting-training-page.css';

import {getUserData} from "../consts/user-data";
import {StartSortingButton} from "../components/start-sorting-button/start-sorting-button";
import {Table} from "../components/table/table";

export const SortingTrainingPage = () => {
    const [userData, setUserData] = useState(getUserData(5));

    const handleNumberEntered = (number) => {
        setUserData(getUserData(number));
    }
    return (
        <div className="sorting-training-page">
            <div className="header">
                <h1>Sorting Training System</h1>
                <StartSortingButton setNumber={handleNumberEntered}/>
            </div>
            <Table userData={userData}/>
        </div>
    )
}
