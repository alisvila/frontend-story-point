import { render, screen, cleanup, fireEvent } from 'src/utils/testUtils';
import LoginForm from '../login';
import {
  RouterProvider,
  createMemoryRouter,
  BrowserRouter,
} from 'react-router-dom';
import { createUser } from 'src/utils/api';
import User from 'types/User';

jest.mock('src/utils/api');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),

  useNavigate: () => mockedUsedNavigate,
}));

describe('LoginForm component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without an error', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  });

  it('should have fields for email and password with submit btn', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should pop an error with blacnk email and password', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(
      screen.getByText(/The email or password is incorrect./i)
    ).toBeInTheDocument();
  });

  it('should pop an error with wrong email', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const user = screen.getByLabelText(/email/i);
    const pass = screen.getByLabelText(/password/i);
    fireEvent.change(user, { target: { value: 'aliam' } });
    fireEvent.change(pass, { target: { value: 'aliam@gmail.com' } });
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(
      screen.getByText(/The email or password is incorrect./i)
    ).toBeInTheDocument();
  });
});
