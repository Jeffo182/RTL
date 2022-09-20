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
  test('Botao proximo pokemon -Pokedex-', () => {
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
    const aboutText = screen.getByText(/Charmander/i);
    expect(aboutText).toBeInTheDocument();
    const buttonAllPokes = screen.getAllByTestId('pokemon-type-button');
    expect(buttonAllPokes[0]).toBeInTheDocument();
    const buttonPokes = screen.getByText(/Electric/i);
    expect(buttonPokes).toBeInTheDocument();
    const all = screen.getByText('All');
    expect(all).toBeInTheDocument();
    userEvent.click(all);
    const pokename = 'pokemon-name';
    const button = screen.getByText('Próximo pokémon');
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[0].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[1].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[2].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[3].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[4].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[5].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[6].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[7].name);
    userEvent.click(button);
    expect(screen.getByTestId(pokename).textContent).toBe(pokemons[8].name);
  });
});

// ate aqui
