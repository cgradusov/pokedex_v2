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
  xs: { span: 16, offset: 6, order: 0 },
  sm: { span: 16, offset: 7 },
  md: { span: 15, offset: 9, order: 0 },
  lg: { span: 15, offset: 9, order: 0 },
  xl: { span: 24, offset: 0, push: 1 },
  xxl: {},
};

const imgColProps = {
  xs: { span: 23, offset: 1, order: 1 },
  sm: { span: 20, offset: 4 },
  md: { span: 18, offset: 6, order: 0 },
  lg: { span: 10, offset: 1, order: 0 },
  xl: { span: 14, offset: 0 },
  xxl: {},
};

const statsColProps = {
  xs: { span: 22, offset: 2, order: 3 },
  sm: { span: 19, offset: 5 },
  md: { span: 12, offset: 0, order: 3 },
  lg: {
    span: 10, offset: 0, order: 2, push: 2,
  },
  xl: {},
  xxl: {},
};

const typesColProps = {
  xs: { span: 10, offset: 3, order: 4 },
  sm: { span: 10, offset: 4 },
  md: { span: 12, offset: 0, order: 5 },
  lg: {
    span: 5, offset: 1, order: 6, push: 2,
  },
  xl: { span: 3, offset: 5, push: 3 },
  xxl: {},
};

const weaknessColProps = {
  xs: { span: 10, order: 4 },
  sm: { span: 10 },
  md: { span: 10, offset: 2, order: 5 },
  lg: {
    span: 5, offset: 0, order: 6, push: 1,
  },
  xl: { push: 3 },
  xxl: {},
};

const descriptionColProps = {
  xs: { span: 22, offset: 2, order: 2 },
  sm: { span: 20, offset: 2 },
  md: { span: 10, offset: 2, order: 4 },
  lg: { span: 12, offset: 0, order: 5 },
  xl: { span: 12, pull: 1 },
  xxl: {},
};

const gutterY = {
  xs: 10,
  sm: 10,
};

const PokePage = ({
  match, history, loading, data, error,
}) => {
  const {
    id, height, weight, types: typesData, stats, specs,
  } = data;

  const { name } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon(name));
  }, [dispatch, name]);
  const canGoBack = typeof history.location.state !== 'undefined';

  const onCLick = () => {
    if (canGoBack) {
      history.goBack();
    }
  };

  const num = id.toString();
  const types = typesData.map((el) => (el.type.name));
  const weakness = calculateWeaknesses(types).sort();
  const { gender_rate: genderRate } = specs;

  return (
    <div style={containerStyle}>
      <Button onClick={onCLick} disabled={!canGoBack} className="back-button">
        <LeftOutlined />
      </Button>
      <div style={cardStyle}>
        {
          error === null
            ? (
              <Skeleton loading={loading} active>
                <Row justify="center" align="stretch" gutter={[0, gutterY]}>
                  <Col {...headingColProps}>
                    <h1>{`${capitalizeString(name)} #${formatNumber(num)}`}</h1>
                  </Col>
                  <Col {...imgColProps}>
                    <img
                      style={{ width: '350px' }}
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(num)}.png`}
                      alt=""
                    />
                  </Col>
                  <Col {...statsColProps} className="stats">
                    {stats.map((s) => (
                      <PokeStat param={s.stat.name} key={s.stat.name} value={s.base_stat} />
                    ))}
                  </Col>
                  <Col {...typesColProps}>
                    <h3>Types:</h3>
                    {types.map((type) => (
                      <PokeTag type={type} key={type} clickable={false} />
                    ))}
                  </Col>
                  <Col {...weaknessColProps}>
                    <h3>Weakness:</h3>
                    {weakness.map((type) => (
                      <PokeTag type={type} key={type} clickable={false} />
                    ))}
                  </Col>
                  <Col {...descriptionColProps} style={{ maxWidth: '350px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span>{`Height: ${height / 10} m`}</span>
                      <span>{`Weight: ${weight} kg`}</span>
                      <span>
                        Gender:
                        {' '}
                        <PokeGender rate={genderRate} />
                      </span>
                    </div>
                    <p />
                    <span>
                      For some time after its birth, it grows by gaining
                      nourishment from the seed on its back.
                    </span>
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
