import React from 'react';
import PokeHeader from "./PokeHeader";
import PokeList from "./PokeList";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <>
      <PokeHeader />
      <PokeList />
    </>
  );
}

export default App;
