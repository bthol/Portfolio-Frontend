import React from 'react';
import { SoftwareContent as Content } from '../ContentModules/SoftwareContent';
import { Comp10 } from '../Components/Comp10';
import { Comp12 } from '../Components/Comp12';

const SoftwarePage = (props) => {

    return (
        <div id='softwarepage' className="page-content">
            
            <Comp10 title={"Software"} />

            <Comp12 name={Content.software[0].name} url={Content.software[0].url} description={Content.software[0].description} notifyFeature={props.notifyFeature} />
            <Comp12 name={Content.software[1].name} url={Content.software[1].url} description={Content.software[1].description} notifyFeature={props.notifyFeature} />
            <Comp12 name={Content.software[2].name} url={Content.software[2].url} description={Content.software[2].description} notifyFeature={props.notifyFeature} />

        </div>
    )
}

export { SoftwarePage }