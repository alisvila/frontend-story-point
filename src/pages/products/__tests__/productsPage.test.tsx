import { render } from '@testing-library/react';
import { useProduct } from 'src/hooks/useProducts';
import ProductsPage from '..';

const mockedUseProduct = useProduct as jest.Mock<any>;

jest.mock('src/hooks/useProducts');

describe('ProductPage component', () => {
  beforeEach(() => {
    mockedUseProduct.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without an error', () => {
    render(<ProductsPage />);
  });

  it('should call userProduct', () => {
    render(<ProductsPage />);

    expect(useProduct).toHaveBeenCalled();
  });

  it('should displays error message', () => {
    mockedUseProduct.mockImplementation(() => ({
      isFetching: false,
      isError: true,
      error: { message: 'something bad is happening please try again later' },
    }));
    const { getByText } = render(<ProductsPage />);

    expect(
      getByText(/something bad is happening please try again later/i)
    ).toBeVisible();
  });

  it('should displays loading message', () => {
    mockedUseProduct.mockImplementation(() => ({
      isFetching: true,
      isError: false,
    }));
    const { getByText } = render(<ProductsPage />);

    expect(getByText(/Loading data please wait/i)).toBeVisible();
  });
});
