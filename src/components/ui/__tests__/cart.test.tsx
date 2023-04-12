import { render, screen } from '@testing-library/react';
import CardWrapper from '../cardWrapper';
import BaseProducts from 'types/Products';

describe('cardWrapper component tests', () => {
  it('should render single card component', () => {
    const cardData: BaseProducts = {
      id: 2,
      image: 'test image',
      name: 'test name',
      description: 'test desc',
      price: 25,
    };
    render(
      <CardWrapper
        image={cardData.image}
        id={cardData.id}
        name={cardData.name}
        description={cardData.description}
        price={cardData.price}
      />
    );
    expect(screen.getByText(cardData.name)).toBeInTheDocument();
    expect(screen.getByText(cardData.description)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(String(cardData.price), 'i'))
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });
});
