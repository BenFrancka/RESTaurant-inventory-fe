import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InventoryListContainer from '../../containers/InventoryListContainer';
// eslint-disable-next-line max-len
import UpdateInventoryItemAmount from '../../containers/InventoryUpdateContainer';
// eslint-disable-next-line max-len
import AddItemToInventory from '../../containers/AddItemToInventory';


export default function App() {
  return (
    <Switch>
      <Route exact path="/add">
        <AddItemToInventory />
      </Route>
      <Route exact path="/:id">
        <UpdateInventoryItemAmount />
      </Route>
      <Route exact path="/">
        <InventoryListContainer />
      </Route>
    </Switch>
  );
}
