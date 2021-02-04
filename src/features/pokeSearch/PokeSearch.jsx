/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Input, Form } from 'antd';
import { push } from 'connected-react-router';

const { Search } = Input;

const PokeSearch = ({ query }) => {
  const dispatch = useDispatch();
  const search = query.search ?? '';
  const [isValid, setValid] = useState(true);

  const validate = (value) => /^[A-Za-z]+$|^[0-9]+$/g.test(value);
  const onChange = (e) => {
    const { value } = e.target;
    setValid(validate(value) || value === '');
  };

  const onSearch = (newSearchValue) => {
    if (isValid) {
      const searchParams = new URLSearchParams(query);

      if (newSearchValue === '') {
        searchParams.delete('search');
      } else {
        searchParams.set('search', newSearchValue);
      }

      dispatch(push(`/1?${searchParams}`));
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

const mapState = (state) => ({
  query: state.router.location.query,
});

export default connect(mapState, null)(PokeSearch);
