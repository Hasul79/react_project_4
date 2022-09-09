import { render, screen } from '@testing-library/react';
import ClassComponent from './ClassComponent';

test('renders learn react link', () => {
  // render(<ClassComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
