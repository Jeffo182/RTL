import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testando pagina FavoritePokemons', () => {
  test('Titulo -FavoritePokemons Pokédex-', () => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);

    const FavoritePokemonsText = screen.getByRole('heading', {
      name: /Favorite pokémons/i,
      level: 2,
    });
    expect(FavoritePokemonsText).toBeInTheDocument();
  });
  test('paragrafo 1 -No favorite pokemon found-', () => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);

    const FavoritePokemonsText = screen.getByText(/No favorite pokemon found/i);
    expect(FavoritePokemonsText).toBeInTheDocument();
  });
});

// ate aqui
