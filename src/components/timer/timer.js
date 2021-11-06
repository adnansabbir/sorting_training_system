import React, {useEffect, useState} from "react";

export const Timer = ({status}) => {
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
        switch (status) {
            case 'start':
                startTimer();
                break
            default:
                stopTimer();
        }
        return () => {
            if (intervalRef) clearInterval(intervalRef);
        }
    }, [status]);

    if (!timeSpend) return (<div/>)

    const {days, hours, minutes, seconds} = timeSpend;
    return (
        <div className="timers">
            <span>{status === 'start' ? 'Time spent' : 'Last time'} : {days ? `${days}d` : ''} {hours ? `${hours}h` : ''} {minutes ? `${minutes}m` : ''} {`${seconds}s`}</span>
        </div>
    )
}
