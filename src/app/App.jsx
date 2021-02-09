/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from 'antd/lib/layout';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import PokeHeader from '../components/PokeHeader';
import PokeList from '../features/pokeList/PokeList';
import 'antd/dist/antd.css';
import { history } from './store';

const { Footer } = Layout;

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/1" />
      </Route>
      <Route
        path="/:num"
        component={(props) => (
          <>
            <PokeHeader {...props} />
            <PokeList {...props} />

          </>
        )}
      />
    </Switch>
    <Footer style={{ textAlign: 'center' }}>
      Pokedex App ©2021 Created by
      {' '}
      <a href="https://github.com/cgradusov">Constantine Gradusov</a>
    </Footer>
  </Router>
);

export default App;
