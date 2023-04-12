import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from 'src/utils/testUtils';
import LoginPage from '..';
import bg from '../loginBack.png';
import { createUser } from 'src/utils/api';
import {
  BrowserRouter,
  RouterProvider,
  createMemoryRouter,
  useNavigate,
} from 'react-router-dom';

jest.mock('src/utils/api');

const setupMyTest = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/products',
        element: <>products</>,
      },
    ],
    {
      initialEntries: ['/login'],
      initialIndex: 0,
    }
  );
  render(<RouterProvider router={router} />);
  return { router };
};

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

  test('should be login form', async () => {
    jest.mocked(createUser).mockImplementation((user) => {
      return new Promise((resolve, reject) => resolve(user));
    });
    const { router } = setupMyTest();
    expect(router.state.location.pathname).toEqual('/login');

    const btn = screen.getByRole('button');
    const user = screen.getByLabelText(/email/i);
    const pass = screen.getByLabelText(/password/i);
    fireEvent.change(user, { target: { value: 'aliam@gmail.com' } });
    fireEvent.change(pass, { target: { value: 'aliam@gmail.com' } });
    await fireEvent.click(btn);
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/products');
    });
  });
});
