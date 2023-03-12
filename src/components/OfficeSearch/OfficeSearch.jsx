import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getCities, getWarehouses } from '../../redux/offices/operations';
import CitySelector from '../CitySelector/CitySelector';
import WarehousesList from '../WarehousesList/WarehousesList';
import { selectCity } from '../../redux/offices/selectors';

import { Container, Text } from './OfficeSearch.styled';

const OfficeSearch = () => {
  const [cityName, setCityName] = useState('');

  const dispatch = useDispatch();
  const city = useSelector(selectCity);

  useEffect(() => {
    dispatch(getCities());
    if (cityName) {
      dispatch(getWarehouses(cityName));
    }
  }, [dispatch, cityName]);

  const getCityName = city => {
    setCityName(city);
  };

  return (
    <Container>
      <CitySelector getCityName={getCityName} />
      <Text>{city}</Text>
      <WarehousesList />
    </Container>
  );
};

export default OfficeSearch;
