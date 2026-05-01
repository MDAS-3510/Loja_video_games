function CardProduto({ nome, imagem, preco }) {
    return (
        <div className="card-produto">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <h4>{preco}</h4>

            <button>Comprar</button>
        </div>

    )


}
export default CardProduto;