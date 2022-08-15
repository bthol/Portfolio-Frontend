import React, { useRef } from 'react';
import { useIdleTimer as UseIdleTimer } from 'react-idle-timer'

function Idle() {

    const idelTimerRef = useRef(null);
    
    const onIdle = () => {
        console.log("user is idle");
    }

    return(
        <div>
            <UseIdleTimer
                ref={idelTimerRef}
                timeout={5 * 1000}
                onIdle={onIdle}
            ></UseIdleTimer>
        </div>
    )
}

export { Idle };