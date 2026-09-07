import React from 'react';
import { SoftwareContent as Content } from '../ContentModules/SoftwareContent';
import { Comp10 } from '../Components/Comp10';
import { Comp12 } from '../Components/Comp12';

const SoftwarePage = (props) => {
    const softwareComponents = [];
    for (let i = 0; i < Content.software.length; i++) {
        softwareComponents.push(
            <Comp12 name={Content.software[i].name} url={Content.software[i].url} softwareType={Content.software[i].softwareType} platform={Content.software[i].platform} purpose={Content.software[i].purpose} techStack={Content.software[i].techStack} description={Content.software[i].description} list={Content.software[i].list} notifyFeature={props.notifyFeature} />
        )
    }

    return (
        <div id='softwarepage' className="page-content">
            
            <Comp10 title={"Software"} />
            {softwareComponents}
        </div>
    )
}

export { SoftwarePage }