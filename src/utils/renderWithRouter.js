import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(componentToRender) {
  const customHistory = createMemoryHistory();

  const objRender = render(
    <Router history={ customHistory }>
      { componentToRender }
    </Router>,
  );

  return {
    ...objRender,
    history: customHistory,
  };
}

export default renderWithRouter;

// {
//   getByText,
//   findByRole,
//   ...,
//   history: customHistory,
// }

// const { history } = renderWithRouter(<App />);
// history.push('/')
