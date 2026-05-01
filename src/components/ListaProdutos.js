import CardProduto from './CardProduto';

import GDimg from '../assets/Produtos/Geometry_dash.jpg';
import CS2img from '../assets/Produtos/cs2.jpg';
import dota2img from '../assets/Produtos/dota2.jpg';
import Pragimg from '../assets/Produtos/Pragmata.jpg';
import RERimg from '../assets/Produtos/RER.jpg';
import Crimsonimg from '../assets/Produtos/Crimson_Desert.jpg';

function ListaProdutos(){
    const produtos = [
        { nome: "Geometry Dash", preco: "R$ 19,90", imagem: GDimg },
        { nome: "Counter-Strike 2", preco: "R$ 68,90", imagem: CS2img },
        { nome: "Dota 2", preco: "R$ 30,00", imagem: dota2img },
        { nome: "Pragmata", preco: "R$ 280,99", imagem: Pragimg },
        { nome: "Resident Evil Requiem", preco: "R$ 130,90", imagem: RERimg },
        { nome: "Crimson Desert", preco: "R$ 80,00", imagem: Crimsonimg }
    ]

    return(
        <section className='lista-produtos'>
            <h2>Nossos produtos</h2>
            {produtos.map((produto) => (
                <CardProduto key={produto.nome} {...produto} />
            ))}
        </section>
    )
}

export default ListaProdutos;