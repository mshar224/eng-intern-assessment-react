import React, {useState, useCallback} from 'react'
import StopWatchButton from './StopWatchButton'

export default function StopWatch() {

    const [currentTime, setCurrentTime] = useState(0);
    const [isTimerOn, setIsTimerOn] = useState(false);

    // Function to handle resetting the timer
    const handleReset = useCallback(() => {

    }, []);


    return(
        <div>

        {/* Buttons */}
            <StopWatchButton type={'start'} onClick={() =>{} } />
            <StopWatchButton type={'lap'} onClick={() =>{} } />
            <StopWatchButton type={'stop'} onClick={() => setIsTimerOn(false)} />
            <StopWatchButton type={'reset'} onClick={handleReset} />

        </div>
    )
}