import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testando links do topo da aplicacao', () => {
  test('link deve possuir o texto Home', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const aboutText = screen.getByRole('link', {
      name: /home/i,
    });
    expect(aboutText).toBeInTheDocument();
  });
  test('link deve possuir o texto About', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const aboutText = screen.getByRole('link', {
      name: /About/i,
    });
    expect(aboutText).toBeInTheDocument();
  });
  test('link deve possuir o texto Favorite Pokémons', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const aboutText = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });
    expect(aboutText).toBeInTheDocument();
  });
});

describe('Teste rotas do app', () => {
  test('link deve ir para / - home', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const linkHome = screen.getByRole('link', {
      name: /home/i,
    });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    const initialPage = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
    });
    expect(initialPage).toBeInTheDocument();
  });
  test('link deve ir para /about - about', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const linkAbout = screen.getByRole('link', {
      name: /about/i,
    });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const aboutPage = screen.getByRole('heading', {
      name: /About Pokédex/i,
    });
    expect(aboutPage).toBeInTheDocument();
    const imgAbout = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(imgAbout).toBeInTheDocument();
    expect(imgAbout).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
  test('link deve ir para /favorites - favorites', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const linkAbout = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const aboutPage = screen.getByRole('heading', {
      name: /Favorite pokémons/i,
    });
    expect(aboutPage).toBeInTheDocument();
  });
  test('renderiza a NOT FOUND with renderWithRouter', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/rota-inexistente');
    });

    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found/i,
    });
    expect(notFoundText).toBeInTheDocument();
  });
});

/* const projectLink = screen.getByRole('link', {
      name: /projetos/i,
    });
    expect(projectLink).toBeInTheDocument();
    userEvent.click(projectLink);

    const projectText = screen.getByRole('heading', {
      name: /página de projetos/i,
      level: 1,
    });
    expect(projectText).toBeInTheDocument();
    // screen.logTestingPlaygroundURL(); */
