import React, {useEffect, useState} from "react";
import './sorting-training-page.css';

import {getUserData} from "../consts/user-data";
import {StartSortingButton} from "../components/start-sorting-button/start-sorting-button";

export const SortingTrainingPage = () => {
    const [numberOfSample, setSampleNumber] = useState(0);

    useEffect(()=> {
        console.log(numberOfSample);
    });
    // console.log(getUserData(20));
    return (
        <div className="sorting-training-page">
            <StartSortingButton setNumber={setSampleNumber}/>
        </div>
    )
}
