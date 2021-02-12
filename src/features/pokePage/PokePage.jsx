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
      <Button onClick={onCLick} disabled={!canGoBack} style={{ width: '100%' }}>
        <LeftOutlined />
      </Button>
      <div style={cardStyle}>
        {
          error === null
            ? (
              <Skeleton loading={loading} active>
                <Row>
                  <Col span={23} offset={1}>
                    <h1>{`${capitalizeString(name)} #${formatNumber(num)}`}</h1>
                  </Col>
                  <Col span={14}>
                    <img
                      style={{ width: '350px' }}
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(num)}.png`}
                      alt=""
                    />
                  </Col>
                  <Col span={10} style={{ marginTop: '30px' }}>
                    <div style={{ widht: '400px' }}>
                      {stats.map((s) => (
                        <PokeStat param={s.stat.name} key={s.stat.name} value={s.base_stat} />
                      ))}
                    </div>
                    <p />
                    <div>
                      <h3>Types:</h3>
                      {types.map((type) => (
                        <PokeTag type={type} key={type} clickable={false} />
                      ))}
                    </div>
                    <p />
                    <div>
                      <h3>Weakness:</h3>
                      {weakness.map((type) => (
                        <PokeTag type={type} key={type} clickable={false} />
                      ))}
                    </div>
                  </Col>
                  <Col span={9} offset={1}>
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
