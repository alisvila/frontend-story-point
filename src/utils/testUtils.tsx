import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

function renderWrapper(ui: ReactElement) {
  function Wrapper({ children }: any) {
    const queryClient = new QueryClient({});
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }
  return render(ui, { wrapper: Wrapper });
}

export * from '@testing-library/react';
// override render method
export { renderWrapper as render };
