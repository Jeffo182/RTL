import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Verificar informacoes do Card', () => {
  test('se é renderizado um card com as informações de determinado pokémon:', () => {
    renderWithRouter(<App />);
    const imagePoke = screen.getByRole('img', {
      name: `${pokemons[0].name} sprite`,
    });
    const linkDetalhes = screen.getByRole('link', { name: /more details/i });
    const pokeName = screen.getByTestId(/pokemon-name/i);
    const pokeWeight = screen.getByTestId(/pokemon-weight/i);
    expect(pokeName).toBeInTheDocument();
    expect(pokeWeight).toBeInTheDocument();
    expect(imagePoke).toHaveAttribute('src', `${pokemons[0].image}`);
    expect(imagePoke).toHaveAttribute('alt', `${pokemons[0].name} sprite`);
    expect(linkDetalhes).toBeInTheDocument();
  });
  test('Teste se ao clicar no link e redirecionado para rota detalhes de pokémon', () => {
    const { history } = renderWithRouter(<App />);
    console.log(pokemons);
    const linkDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetalhes);
    const { pathname } = history.location;
    expect(pathname).not.toBe('/');
    expect(pathname).toBe('/pokemons/25');
    const checkBoxFav = screen.getByLabelText(/Pokémon favoritado/i);
    userEvent.click(checkBoxFav);
    const favChecked = screen.getByRole('img', {
      name: /Pikachu is marked as favorite/i,
    });
    expect(favChecked).toHaveAttribute('src', '/star-icon.svg');
    expect(favChecked).toBeInTheDocument();
  });
  test('testando rotas', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/pokemons/25/');
    });
    const pokeType = screen.getByTestId('pokemon-type', { name: /electric/i });
    expect(pokeType).toBeInTheDocument();
    expect(pokeType).toHaveTextContent('Electric');
  });
});
