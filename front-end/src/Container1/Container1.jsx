import React from 'react';
// import { useState } from 'react';
import { Display1 } from './Display1';
import { Display2 } from './Display2';

const Container1 = () => {
    return(
        <div>
            <p>Container1 test pass</p>
            <Display1></Display1>
            <Display2></Display2>
        </div>
    )
};

export { Container1 };