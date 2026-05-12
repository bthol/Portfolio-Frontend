import React from 'react';
import { GameContent as Content } from '../ContentModules/GameContent';
import { Comp10 } from '../Components/Comp10';
import { Comp11 } from '../Components/Comp11';

const GamePage = (props) => {

    return (
        <div id='gamepage' className="page-content">

            <Comp10 title={"Games"} />

            <Comp11 name={Content.games[0].name} url={Content.games[0].url} description={Content.games[0].description} />
            <Comp11 name={Content.games[1].name} url={Content.games[1].url} description={Content.games[1].description} />
            <Comp11 name={Content.games[2].name} url={Content.games[2].url} description={Content.games[2].description} />
            <Comp11 name={Content.games[3].name} url={Content.games[3].url} description={Content.games[3].description} />
            <Comp11 name={Content.games[4].name} url={Content.games[4].url} description={Content.games[4].description} />

            
        </div>
    )
}

export { GamePage }