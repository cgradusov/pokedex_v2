/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import './PokeCacheButton.css';

const PokeCacheButton = () => {
  const [loadingStatus, setLoadingStatus] = useState('init'); // ['init', 'progress', 'done']
  const [counter, updateCounter] = useState(0);
  const filesCount = 904; // TODO: Read length from files list

  const onClick = () => {
    setLoadingStatus('progress');
    // TODO: Add caching code
    updateCounter(100);
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
            {loadingStatus === 'progress' ? (<Progress type="circle" percent={counter / filesCount} width={22} format={() => ''} className="poke-cache-button-progress" />) : <DownloadOutlined />}
          </div>
          Update offline cache
        </>
      )}
    </Button>
  );
};

export default PokeCacheButton;
