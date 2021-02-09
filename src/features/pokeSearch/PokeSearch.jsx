/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import { updateSearch, setValid } from './pokeSeachSlice';

const PokeSearch = ({ query, isValid, onClick }) => {
  const dispatch = useDispatch();
  const search = query.search ?? '';

  useEffect(() => {
    dispatch(updateSearch(search ?? ''));
  }, [dispatch, search]);

  const validate = (value) => /^[A-Za-z]+$|^[0-9]+$/g.test(value);
  const onChange = (e) => {
    const { value } = e.target;

    // Update search on clear
    if (e.type === 'click' && value === '') {
      onClick('');
    }

    const validationCheck = validate(value) || value === '';
    if (validationCheck !== isValid) {
      dispatch(setValid(validationCheck));
    }
  };

  return (
    <Form.Item
      validateStatus={isValid ? '' : 'error'}
      help={isValid ? '' : 'Should be combination of numbers or alphabets'}
    >
      <Input onChange={onChange} onPressEnter={(e) => onClick(e.target.value)} onBlur={(e) => dispatch(updateSearch(e.target.value))} placeholder="Name or number" defaultValue={search} allowClear />
    </Form.Item>
  );
};

const mapState = (state) => ({
  query: state.router.location.query,
  isValid: state.pokeSearch.isValid,
});

export default connect(mapState, null)(PokeSearch);
