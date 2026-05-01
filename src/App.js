import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GameList from './components/GameList';
import Banner from './components/Banner';
import ListaProdutos from './components/ListaProdutos';
import Sobre from './components/sobre';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        {/* Página Inicial - Lista de Games */}
        <Route path="/" element={<GameList />} />
        
        {/* Página da Loja - Banner + Produtos + Sobre */}
        <Route path="/loja" element={
          <>
            <Banner />
            <ListaProdutos />
            <Sobre />
          </>
        } />
        
        {/* Página de Contato */}
        <Route path="/contato" element={
          <section className="contato">
            <h1>Entre em Contato</h1>
            <p>Email: contato@comg.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </section>
        } />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;