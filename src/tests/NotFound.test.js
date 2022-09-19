import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NotFound from '../pages/NotFound';

describe('Testando pagina NotFound', () => {
  test('Titulo -NotFound-', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);

    const NotFoundText = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(NotFoundText).toBeInTheDocument();
  });
  test('img pikachu chorando-', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);

    const imgAbout = screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i,
    });
    expect(imgAbout).toBeInTheDocument();
    expect(imgAbout).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});

// ate aqui
