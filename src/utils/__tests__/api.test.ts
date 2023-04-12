import { getProducts } from '../api';

describe('api calls', () => {
  test('api call for get all products', () => {
    const testData = {
      products: [
        {
          id: 1,
          name: 'Product 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam dui lacinia ornare maximus. Duis dictum nibh sed lorem posuere venenatis.',
          price: 10.99,
          image:
            'https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg?w=1380&t=st=1681248837~exp=1681249437~hmac=304d1768f1914f40d976b91da32fe28b7c26eb399d63c657e4e38c17632377ed',
        },
      ],
    };

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getProducts().then((data) => {
      expect(data.products[0].name).toEqual(testData.products[0].name);
    });
  });
});
