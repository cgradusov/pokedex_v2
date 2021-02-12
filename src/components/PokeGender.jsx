/* eslint-disable react/prop-types */
import React from 'react';
import ManOutlined from '@ant-design/icons/ManOutlined';
import WomanOutlined from '@ant-design/icons/WomanOutlined';
import QuestionOutlined from '@ant-design/icons/QuestionOutlined';

const PokeGender = ({ rate }) => {
  switch (rate) {
    case -1:
      return <QuestionOutlined />;
    case 0:
      return <ManOutlined />;
    default:
      return (
        <>
          <ManOutlined />
          <WomanOutlined />
        </>
      );
  }
};

export default PokeGender;
