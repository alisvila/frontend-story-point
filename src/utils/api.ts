const BASE_URL = 'http://localhost:3004';

import BaseProducts from 'src/types/Products';
import User from 'types/User';

export const getProducts = async (): Promise<BaseProducts[]> => {
  return fetch(`${BASE_URL}/products`).then((res) => res.json());
};

export const getProduct = (id: number): Promise<BaseProducts> =>
  fetch(`${BASE_URL}/products/${id}`).then((res) => res.json());

export const getUser = (id: number): Promise<User> =>
  fetch(`${BASE_URL}/users/${id}`).then((res) => res.json());

export const createUser = async (user: User): Promise<User> =>
  fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
