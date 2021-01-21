import React from 'react';
import PokeHeader from '../components/PokeHeader';
import PokeList from '../features/pokeList/PokeList';
import 'antd/dist/antd.css';

const App = () => (
  <>
    <PokeHeader />
    <PokeList />
  </>
);

export default App;
