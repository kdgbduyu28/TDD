import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// import React from 'react';
// import { mount } from '@cypress/react';
// import App from './App';

// it('renders learn react link', () => {
//   mount(<App />);
//   cy.get('a').contains('Learn React');
// });