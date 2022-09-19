import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Pokemon from '../components/Pokemon';

describe('Testando component Pokemon', () => {
  test('Titulo -Pokemon Pokédex-', () => {
    render(<MemoryRouter><Pokemon /></MemoryRouter>);

    const PokemonText = screen.getByRole('heading', {
      name: /Pokemon Pokédex/i,
      level: 2,
    });
    expect(PokemonText).toBeInTheDocument();
  });
  test('paragrafo 1 -Pokemon Pokédex-', () => {
    render(<MemoryRouter><Pokemon /></MemoryRouter>);

    const PokemonText = screen.getByText(/This application simulates a Pokédex/i);
    expect(PokemonText).toBeInTheDocument();
  });
  test('paragrafo 2 -Pokemon Pokédex-', () => {
    render(<MemoryRouter><Pokemon /></MemoryRouter>);

    const PokemonText = screen.getByText(/One can filter Pokémons by type/i);
    expect(PokemonText).toBeInTheDocument();
  });
  test('imagem -Pokemon Pokédex-', () => {
    render(<MemoryRouter><Pokemon /></MemoryRouter>);

    const imgPokemon = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

// ate aqui
