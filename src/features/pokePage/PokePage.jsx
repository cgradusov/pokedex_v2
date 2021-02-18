/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Skeleton from 'antd/lib/skeleton';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import { useDispatch, connect } from 'react-redux';
import PokeStat from '../../components/PokeStat';
import PokeTag from '../../components/PokeTag';
import PokeGender from '../../components/PokeGender';
import { capitalizeString, formatNumber } from '../../utils/stringUtils';
import calculateWeaknesses from '../../utils/pokeWeaknessCalc';
import { fetchPokemon } from './pokePageSlice';
import './PokePage.css';

const containerStyle = {
  minHeight: 'calc(100% - 70px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
};

const cardStyle = {
  border: '1px solid #f0f0f0',
  width: '85%',
  padding: '30px',
  marginBottom: '50px',
  maxWidth: '1100px',
};

const headingColProps = {
  xs: { span: 24, order: 0 },
  lg: { span: 24, pull: 8 },
};

const imgColProps = {
  xs: { span: 24, order: 1 },
  lg: { span: 12 },
};

const statsColProps = {
  xs: { order: 4 },
  md: { span: 12, offset: 0, order: 3 },
  lg: { span: 10, offset: 2 },
};

const typesColProps = {
  xs: { span: 24, order: 5 },
  md: { span: 23, offset: 1 },
  lg: { span: 11, offset: 1, order: 5 },
  xl: { span: 10, offset: 2 },
};

const descriptionColProps = {
  xs: { span: 24, order: 3 },
  md: { span: 11, offset: 1, order: 3 },
  lg: { span: 12, order: 4 },
};

const gutterY = {
  xs: 10,
  md: 12,
};

const PokePage = ({
  match, history, loading, data, error,
}) => {
  const {
    id, height, weight, types, stats, gender,
  } = data;

  const { name } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon(name));
  }, [dispatch, name]);

  const num = id.toString();
  const weakness = calculateWeaknesses(types).sort();

  return (
    <div style={containerStyle}>
      <Button onClick={() => history.goBack()} className="back-button">
        <LeftOutlined />
      </Button>
      <div style={cardStyle}>
        {
          error === null
            ? (
              <Skeleton loading={loading} active>
                <Row justify="center" gutter={[0, gutterY]}>
                  <Col {...headingColProps}>
                    <h1 style={{ textAlign: 'center' }}>{`${capitalizeString(name)} #${formatNumber(num)}`}</h1>
                  </Col>
                  <Col {...imgColProps}>
                    <img
                      className="avatar"
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(num)}.png`}
                      alt=""
                    />
                  </Col>
                  <Col {...statsColProps} className="stats" flex="200px">
                    {stats.map((s) => (
                      <PokeStat param={s.name} key={s.name} value={s.bs} />
                    ))}
                  </Col>
                  <Col {...descriptionColProps} style={{ maxWidth: '350px' }}>
                    <div className="specs">
                      <span>{`Height: ${height / 10}m`}</span>
                      <span>{`Weight: ${weight / 10}kg`}</span>
                      <span>
                        Gender:
                        {' '}
                        <PokeGender rate={gender} />
                      </span>
                    </div>
                    <p />
                    <div className="description">
                      For some time after its birth, it grows by gaining
                      nourishment from the seed on its back.
                    </div>
                  </Col>
                  <Col {...typesColProps}>
                    <Row justify="space-between">
                      <Col span={12}>
                        <h3>Types:</h3>
                        <Row gutter={[0, 5]}>
                          {types.map((type) => (
                            <Col key={type}>
                              <PokeTag type={type} clickable={false} />
                            </Col>
                          ))}
                        </Row>
                      </Col>
                      <Col span={12}>
                        <h3>Weaknesses:</h3>
                        <Row gutter={[0, 5]}>
                          {weakness.map((type) => (
                            <Col key={type}>
                              <PokeTag type={type} clickable={false} />
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Skeleton>
            )
            : (
              <Row gutter={[0, 16]} justify="center">
                <h1>Not Found</h1>
              </Row>
            )
}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  loading: state.pokePage.loading,
  error: state.pokePage.error,
  data: state.pokePage.data,
});

export default connect(mapState, null)(PokePage);
