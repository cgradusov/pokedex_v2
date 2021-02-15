/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Pagination from 'antd/lib/pagination';
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import DoubleLeftOutlined from '@ant-design/icons/DoubleLeftOutlined';
import DoubleRightOutlined from '@ant-design/icons/DoubleRightOutlined';
import './PokePagination.css';

// eslint-disable-next-line no-unused-vars
const getCustomLink = (query) => (pagenumber, type, originalElement) => {
  const searchParams = new URLSearchParams(query);
  const uri = `${pagenumber}?${searchParams}`;
  const prefixCls = 'ant-pagination';
  const ellipsis = <span className={`${prefixCls}-item-ellipsis`}>•••</span>;

  switch (type) {
    case 'jump-prev':
      return (
        <Link to={`/${uri}`} className={`${prefixCls}-item-link`}>
          <div className="ant-pagination-item-container">
            <DoubleLeftOutlined className={`${prefixCls}-item-link-icon`} />
            {ellipsis}
          </div>
        </Link>
      );
    case 'jump-next':
      return (
        <Link to={`/${uri}`} className={`${prefixCls}-item-link`}>
          <div className="ant-pagination-item-container">
            <DoubleRightOutlined className={`${prefixCls}-item-link-icon`} />
            {ellipsis}
          </div>
        </Link>
      );
    case 'prev':
      return (
        <Link to={`/${uri}`} component={Button} className={`${prefixCls}-item-link`}>
          <LeftOutlined />
        </Link>
      );
    case 'next':
      return (
        <Link to={`/${uri}`} component={Button} className={`${prefixCls}-item-link`}>
          <RightOutlined />
        </Link>
      );
    default:
      return (
        <Link to={`/${uri}`} className={`${prefixCls}-item-link`}>
          {pagenumber}
        </Link>
      );
  }
};

const PokePagination = ({
  match, count, pokemonsPerPage, query,
}) => {
  const { num } = match.params;
  const pageNumber = Number.parseInt(num, 10);

  return (
    <Row gutter={[0, 16]} justify="center">
      <Col style={{ margin: '15px 0' }}>
        <Pagination
          current={pageNumber}
          total={count}
          onChange={() => window.scrollTo(0, 0)}
          defaultPageSize={pokemonsPerPage}
          showSizeChanger={false}
          itemRender={getCustomLink(query)}
        />
      </Col>
    </Row>
  );
};

const mapState = (state) => ({
  count: state.pokeList.count,
  pokemonsPerPage: state.pokePagination.pokemonsPerPage,
  query: state.router.location.query,
});

export default connect(mapState, null)(PokePagination);
