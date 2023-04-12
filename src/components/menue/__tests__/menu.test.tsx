import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Navbar from '..';
test('should contain a logo within navbar', () => {
  render(<Navbar />);

  const logo = screen.getAllByText(/logo/i);

  expect(logo).toHaveLength(2);
});
