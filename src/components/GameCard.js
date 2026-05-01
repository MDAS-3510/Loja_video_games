function GameCard({ rank, name, players, image }) {

    return (
        <div className="game-card">
            <div><img src={image} alt={name} /> </div>

            <h1>{rank}º</h1>

            <p>{name}</p>

            <p>{players} jogadores</p>

        </div>
    )
}

export default GameCard;  