/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const PokeSearch = ({ location }) => {
  const history = useHistory();
  const params = new URLSearchParams(location?.search);
  const search = params.get('search') ?? '';
  const [isValid, setValid] = useState(true);

  const validate = (value) => /^[A-Za-z]+$|^[0-9]+$/g.test(value);
  const onChange = (e) => {
    const { value } = e.target;
    setValid(validate(value) || value === '');
  };

  const onSearch = (value) => {
    if (isValid) {
      history.push(value === '' ? '/1' : `/1?search=${value}`);
    }
  };

  return (
    <Form.Item
      validateStatus={isValid ? '' : 'error'}
      help={isValid ? '' : 'Should be combination of numbers or alphabets'}
    >
      <Search onChange={onChange} placeholder="Name or number" defaultValue={search} allowClear onSearch={onSearch} enterButton />
    </Form.Item>
  );
};

export default PokeSearch;
