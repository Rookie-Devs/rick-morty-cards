import { useState } from 'react';
import './App.css';
import UserCard from './UserCard';

const personagens = [
  {
    name: 'Rick Sanchez',
    url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Morty Smith',
    url: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    name: 'Summer Smith',
    url: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

function renderUserCard(personagem) {
  return <UserCard url={personagem.image} name={personagem.name} />;
}

function App() {
  const [valores, modificarValores] = useState([]);

  async function obterPersonagens(pagina) {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/?page=' + pagina
    );
    const responseConvertido = await response.json();

    modificarValores(responseConvertido.results);
  }

  obterPersonagens(1);

  return <div className='app'>{valores.map(renderUserCard)}</div>;
}

export default App;
