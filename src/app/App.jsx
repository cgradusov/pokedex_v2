/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Layout from 'antd/lib/layout';
import {
  Redirect, Route, Switch, HashRouter as Router,
} from 'react-router-dom';
import { createHashHistory } from 'history';
import 'antd/dist/antd.css';
import PokePage from '../features/pokePage/PokePage';
import PokeContainer from '../features/pokeContainer/PokeContainer';
import pokemons from '../constants/pokemonsList';
import typesMap from '../constants/pokeTypes';
import families from '../constants/pokeEvolution';

const { Footer } = Layout;

const initialState = {
  loading: false,
  error: null,
  count: 898,
  perPage: 24,
  pokemons,
  typesMap,
  types: Object.keys(typesMap),
  families,
};

const history = createHashHistory();

const App = () => {
  const [state] = useState(initialState);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>
        <Route exact path="/:num">
          <PokeContainer
            types={state.types}
            pokemons={state.pokemons}
            perPage={state.perPage}
            loading={state.loading}
          />
        </Route>
        <Route path="/pokemon/:name">
          <PokePage
            loading={state.loading}
            globalError={state.error}
            pokemons={state.pokemons}
            families={state.families}
          />
        </Route>
      </Switch>
      <Footer style={{ textAlign: 'center' }}>
        Pokedex App ©2021 Created by
        {' '}
        <a href="https://github.com/cgradusov">Constantine Gradusov</a>
      </Footer>
    </Router>
  );
};

export default App;
