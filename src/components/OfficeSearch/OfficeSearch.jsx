import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getCities, getWarehouses } from '../../redux/offices/operations';
import CitySelector from '../CitySelector/CitySelector';
import WarehousesList from '../WarehousesList/WarehousesList';

const OfficeSearch = () => {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CitySelector getCityName={getCityName} />
      {/* <WarehousesList /> */}
    </div>
  );
};

export default OfficeSearch;
