import { render, screen, cleanup, fireEvent } from 'src/utils/testUtils';
import LoginPage from '..';
import bg from '../loginBack.png';
import { createUser } from 'src/utils/api';
import { BrowserRouter } from 'react-router-dom';

jest.mock('src/utils/api');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),

  useNavigate: () => mockedUsedNavigate,
}));

describe('LoginPage component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without an error', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  });

  it('should have image and login form', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const image = screen.getByTestId(/back/i);
    expect(image).toHaveStyle(`background-image: url(${bg})`);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
