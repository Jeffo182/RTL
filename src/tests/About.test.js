import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from '../pages/About';

describe('Testando pagina About', () => {
  test('Titulo -About Pokédex-', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    const aboutText = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });
    expect(aboutText).toBeInTheDocument();
  });
  test('paragrafo 1 -About Pokédex-', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    const aboutText = screen.getByText(/This application simulates a Pokédex/i);
    expect(aboutText).toBeInTheDocument();
  });
  test('paragrafo 2 -About Pokédex-', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    const aboutText = screen.getByText(/One can filter Pokémons by type/i);
    expect(aboutText).toBeInTheDocument();
  });
  test('imagem -About Pokédex-', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    const imgAbout = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(imgAbout).toBeInTheDocument();
    expect(imgAbout).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

// ate aqui
