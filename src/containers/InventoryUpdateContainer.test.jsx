import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateInventoryItemAmount from './InventoryUpdateContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import item from '../fixtures/item.json';

const server = setupServer(
  rest.get('http://localhost:7890/api/v1/inventory/:id', (req, res, ctx) => {
    return res(ctx.json(item));
  })
);

describe('inventory update screen', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays current item', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/1']}>
        <UpdateInventoryItemAmount />
      </MemoryRouter>
    );

    screen.getByAltText('loading-spinner');

    const inventoryItem = await screen.findByRole('article', {
      name: 'inventory item',
    });
    expect(inventoryItem).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
