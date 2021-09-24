import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InventoryListContainer from './InventoryListContainer';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import list from '../fixtures/list.json';

const server = setupServer(
  rest.get('http://localhost:7890/api/v1/inventory', (req, res, ctx) => {
    return res(ctx.json(list));
  })
);

describe('AristSearch Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should display a list of current inventory items', async () => {
    const { container } = render(
      <MemoryRouter>
        <InventoryListContainer />
      </MemoryRouter>
    );

    screen.getByAltText('loading-spinner');

    const ul = await screen.findByRole('list', { name: 'inventory-list' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
