import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InventoryListContainer from '../../containers/InventoryListContainer';
// eslint-disable-next-line max-len
import InventoryUpdateContainer from '../../containers/InventoryUpdateContainer';
// eslint-disable-next-line max-len
import AddItemToInventory from '../../containers/InventoryCreateContainer';


export default function App() {
  return (
    <Switch>
      <Route exact path="/:id">
        <InventoryUpdateContainer />
      </Route>
      <Route exact path="/">
        <InventoryListContainer />
      </Route>
      <Route exact path="/add">
        <AddItemToInventory />
      </Route>
    </Switch>
  );
}
