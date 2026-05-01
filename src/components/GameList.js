import cs2Image from '../assets/cs2.jpg';
import dota2Image from '../assets/dota2.jpg';
import fivemImage from '../assets/FiveM.jpg';
import pubgImage from '../assets/PUBG.jpg';
import windroseImage from '../assets/Windrose.jpg';
import marvelImage from '../assets/Marvel_Rivals.jpg';
import rustImage from '../assets/Rust.jpg';
import slayImage from '../assets/StS2.jpg';
import crimsonImage from '../assets/Crimson_Desert.jpg';
import rainbowImage from '../assets/SiegeX.jpg';

import GameCard from './GameCard';


function GameList(){

    const games = [
        {rank: 1, name: 'Counter-Strike 2', players: '20 milhões', image: cs2Image},
        {rank: 2, name: 'Dota 2', players: '11 milhões', image: dota2Image},
        {rank: 3, name: 'FiveM', players: '1 milhão', image: fivemImage},
        {rank: 4, name: 'PUBG', players: '1 milhão', image: pubgImage},
        {rank: 5, name: 'Windrose', players: '500 mil', image: windroseImage},
        {rank: 6, name: 'Marvel Rivals', players: '300 mil', image: marvelImage},
        {rank: 7, name: 'Rust', players: '200 mil', image: rustImage},
        {rank: 8, name: 'Slay the Spire 2', players: '100 mil', image: slayImage},
        {rank: 9, name: 'Crimson Desert', players: '50 mil', image: crimsonImage},
        {rank: 10, name: 'Rainbow Six Siege X', players: '30 mil', image: rainbowImage}
    ]
    
    return(
        <div className="game-list">
            <h1>Jogos mais jogados do mundo</h1>
            
            {games.map((game) => (
                <GameCard key={game.rank} {...game} />
            ))}
        </div>
    )
}

export default GameList;    
