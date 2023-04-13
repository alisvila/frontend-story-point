import { render, waitFor } from 'src/utils/testUtils';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProtectedRoute from '../protectedRote';

jest.mock('src/utils/api');

const setupMyTest = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/login',
        element: <>normal route</>,
      },
      {
        path: '/pro',
        element: (
          <ProtectedRoute roles={['Admin']}>
            <>protected</>
          </ProtectedRoute>
        ),
      },
    ],
    {
      initialEntries: ['/pro'],
      initialIndex: 0,
    }
  );
  render(<RouterProvider router={router} />);
  return { router };
};

test('should be login form', async () => {
  const { router } = setupMyTest();
  await waitFor(() => {
    expect(router.state.location.pathname).toEqual('/login');
  });
});
