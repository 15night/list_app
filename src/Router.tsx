import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import Top from './Top'

const Router: React.FC = () => {

    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/taskInput" component={App} />
        </Switch>
      </BrowserRouter>
    );
  };

  export default Router;
