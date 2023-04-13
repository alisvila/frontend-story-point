import { render, screen } from '@testing-library/react';
import Navbar from '..';

describe('Navbar component', () => {
  it('should render without an error', () => {
    render(<Navbar />);
  });

  it('should have logo and avatar', () => {
    render(<Navbar />);

    const avatar = screen.getByAltText(/avatar/i);
    const logo = screen.getAllByText(/logo/i);

    expect(logo).toHaveLength(2);
    expect(avatar).toBeInTheDocument();
  });
});
