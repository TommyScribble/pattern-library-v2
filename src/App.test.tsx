import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders download link to main repo', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/download/i);
  expect(linkElement).toBeInTheDocument();
});
