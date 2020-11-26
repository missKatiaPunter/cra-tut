import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/">
        Hello. This is home page.
      </Route>
    </Switch>
  );
}

export default App;
