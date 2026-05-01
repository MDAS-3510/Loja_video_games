import {Link} from 'react-router-dom';

function Header(){
    return (
        <header className='header'>
            <h1>ComG</h1>
            <p>Logo</p>


            <nav>
            <ul>
                <li><Link to="/"> Inicio</Link></li>
                <li><Link to="/loja">Produto</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
            </ul>
            </nav>
        </header>

    )

}   

export default Header;