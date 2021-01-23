import React from 'react';
import { Layout } from 'antd';
import PokeHeader from '../components/PokeHeader';
import PokeList from '../features/pokeList/PokeList';
import 'antd/dist/antd.css';

const { Footer } = Layout;

const App = () => (
  <>
    <PokeHeader />
    <PokeList />
    <Footer style={{ textAlign: 'center' }}>
      Pokedex App ©2021 Created by
      {' '}
      <a href="https://github.com/cgradusov">Constantine Gradusov</a>
    </Footer>
  </>
);

export default App;
