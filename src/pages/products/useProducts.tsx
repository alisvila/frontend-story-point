// src/hooks/useProduct.ts
import { useQuery } from 'react-query';
import { getProducts } from 'src/utils/api';

export const useProduct = () => {
  return useQuery<any, Error>('products', getProducts, {
    initialData: { products: [] },
  });
};
