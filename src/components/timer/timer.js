import React, {useEffect, useState} from "react";

export const Timer = ({dataList}) => {
    const [timeSpend, setTimeSpend] = useState(null);
    const [intervalRef, setIntervalRef] = useState(null);
    let elapsedTime = 0;

    const setTimeDifferenceInDaysHoursMinSec = () => {
        setTimeSpend({
            days: Math.floor(elapsedTime / (60 * 60 * 24)),
            hours: Math.floor(elapsedTime / (60 * 60)),
            minutes: Math.floor(elapsedTime / (60)),
            seconds: Math.floor(elapsedTime)
        })
    }

    const startTimer = () => {
        elapsedTime = 0;
        setTimeSpend(null);
        setIntervalRef(setInterval(() => {
            elapsedTime++;
            setTimeDifferenceInDaysHoursMinSec()
        }, 1000))
    }

    const stopTimer = () => {
        if (intervalRef) clearInterval(intervalRef);
    }

    useEffect(() => {
        stopTimer();
        if(dataList && dataList.length) startTimer();
        return () => {
            if (intervalRef) clearInterval(intervalRef);
        }
    }, [dataList]);

    if (!timeSpend) return (<div/>)

    const {days, hours, minutes, seconds} = timeSpend;
    return (
        <div className="timers">
            <span>{dataList ? 'Time spent' : 'Last time'} : {days ? `${days}d` : ''} {hours ? `${hours}h` : ''} {minutes ? `${minutes}m` : ''} {`${seconds}s`}</span>
        </div>
    )
}
