/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import './PokeCacheButton.css';
import pokeImagesList from '../../constants/pokeImagesList';

const PokeCacheButton = () => {
  const [loadingStatus, setLoadingStatus] = useState('init'); // ['init', 'progress', 'done']

  useEffect(() => {
    caches.open('pokeimages').then((cache) => cache.keys()).then((keys) => {
      if (keys.length >= pokeImagesList.length - 1) {
        setLoadingStatus('done');
      }
    });
  }, []);

  const onClick = () => {
    setLoadingStatus('progress');
    const fetchList = pokeImagesList.map(async (link) => fetch(`/pokedex_v2${link}`));
    Promise.all(fetchList).then(() => setLoadingStatus('done'));
  };

  return (
    <Button
      disabled={loadingStatus !== 'init'}
      shape="round"
      onClick={onClick}
      size="middle"
      className="poke-cache-button"
    >
      {loadingStatus === 'done' ? 'DONE' : (
        <>
          <div className="poke-cache-button-icon">
            {loadingStatus === 'progress' ? (<Progress type="circle" percent={25} width={22} format={() => ''} className="poke-cache-button-progress" />) : <DownloadOutlined />}
          </div>
          Update offline cache
        </>
      )}
    </Button>
  );
};

export default PokeCacheButton;
