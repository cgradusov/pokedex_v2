/* eslint-disable react/prop-types */
import React from 'react';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';

const PokeSearch = ({
  search, onClick, setSearch,
}) => {
  const { value: searchValue, isValid } = search;

  const validate = (value) => /^[A-Za-z]+$|^[0-9]+$/g.test(value);
  const onChange = (e) => {
    const { value } = e.target;
    const valid = validate(value) || value === '';

    // Update search on clear
    if (e.type === 'click' && value === '') {
      setSearch({
        value,
        isValid: valid,
      });
    }

    if (valid) {
      setSearch({
        value,
        isValid: valid,
      });
    } else {
      setSearch({
        isValid: valid,
      });
    }
  };

  const onPressEnter = (value) => {
    if (isValid) {
      onClick(value, isValid);
    }
  };

  return (
    <Form.Item
      validateStatus={isValid ? '' : 'error'}
      help={isValid ? '' : 'Should be combination of numbers or alphabets'}
    >
      <Input
        onChange={onChange}
        onPressEnter={(e) => onPressEnter(e.target.value)}
        placeholder="Name or number"
        defaultValue={searchValue}
        allowClear
      />
    </Form.Item>
  );
};

export default PokeSearch;
