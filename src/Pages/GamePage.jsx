import React from 'react';
import { GameContent as Content } from '../ContentModules/GameContent';
import { Comp10 } from '../Components/Comp10';
import { Comp11 } from '../Components/Comp11';

const GamePage = (props) => {
    const gameComponents = [];
    let key = 0;
    for (let i = 0; i < Content.games.length; i++) {
        gameComponents.push(
            <Comp11 key={key} name={Content.games[i].name} url={Content.games[i].url} description={Content.games[i].description} />
        );
        key += 1;
    }

    return (
        <div id='gamepage' className="page-content">

            <Comp10 title={"Games"} />
            {gameComponents}
            
        </div>
    )
}

export { GamePage }