import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';
import pokemons from '../data';
import Pokedex from '../pages/Pokedex';

describe('Testando pagina Pokedex', () => {
  test('Titulo -Pokedex-', () => {
    const pokemonsFav = {
      4: false,
      10: false,
      23: false,
      25: false,
      65: false,
      78: false,
      143: false,
      148: false,
      151: false,
    };
    render(
      <MemoryRouter>
        <Pokedex
          pokemons={ pokemons }
          isPokemonFavoriteById={ pokemonsFav }
        />
      </MemoryRouter>,
    );
    const PokedexText = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });
    expect(PokedexText).toBeInTheDocument();
  });
  test('Botao proximo pokemon -Pokedex-', async () => {
    const pokemonsFav = {
      4: false,
      10: false,
      23: false,
      25: false,
      65: false,
      78: false,
      143: false,
      148: false,
      151: false,
    };
    render(
      <MemoryRouter>
        <Pokedex
          pokemons={ pokemons }
          isPokemonFavoriteById={ pokemonsFav }
        />
      </MemoryRouter>,
    );
    const buttonEl = screen.getByTestId('next-pokemon', { name: /Próximo pokémon/i });
    expect(buttonEl).toBeInTheDocument();
    userEvent.click(buttonEl);
    const aboutText = await screen.getByText(/Charmander/i);
    expect(aboutText).toBeInTheDocument();
    const buttonAllPokes = screen.getAllByTestId('pokemon-type-button');
    expect(buttonAllPokes[0]).toBeInTheDocument();
    const buttonPokes = await screen.getByText(/Electric/i);
    expect(buttonPokes).toBeInTheDocument();
    // const typePoke = await screen.getByTestId('pokemon-type', {
    //   type: /Fire/i,
    // });
    // expect(typePoke).toBeInTheDocument();
  });
});

// ate aqui
