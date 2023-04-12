import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import LoginPage from '..';

test('should an login page', () => {
  render(<LoginPage />);

  // const logo = screen.getByRole('link');
  // expect(logo).toBeInTheDocument();
});

test('should pop up an error when username is empty', () => {
  render(<LoginPage />);

  // const logo = screen.getByRole('link');
  // expect(logo).toBeInTheDocument();
});

test('should pop up an error when password is empty', () => {
  render(<LoginPage />);

  // const logo = screen.getByRole('link');
  // expect(logo).toBeInTheDocument();
});
