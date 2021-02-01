/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import PokeHeader from '../components/PokeHeader';
import PokeList from '../features/pokeList/PokeList';
import 'antd/dist/antd.css';

const { Footer } = Layout;

const App = () => (
  <Router>
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
