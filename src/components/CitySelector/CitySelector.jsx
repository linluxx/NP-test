import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { selectCities } from '../../redux/offices/selectors';
import { useSelector } from 'react-redux';

const CitySelector = ({ getCityName }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [cityValue, setCityValue] = useState('');
  const loading = open && options.length === 0;
  const citiesList = useSelector(selectCities);

  //   useEffect(() => {
  //     let active = true;
  //     if (!loading) {
  //       return undefined;
  //     }

  //     (async () => {
  //       await

  //       if (active) {
  //         setOptions([...citiesList]);
  //       }
  //     })();

  //     return () => {
  //       active = false;
  //     };
  //   }, [loading, citiesList, dispatch]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
    setOptions(
      citiesList.map(item => {
        return { title: item.Description, id: item.CityID };
      })
    );
    // console.log(options);
  }, [citiesList, open]);

  const onSelectChange = evt => {
    console.dir(evt.currentTarget);
    getCityName(evt.target.innerText);
  };

  return (
    <Autocomplete
      id="city"
      autoSelect={true}
      onChange={onSelectChange}
      sx={{ width: 300, marginBottom: '24px' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={option => option.title}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          color="secondary"
          value={cityValue}
          label="Оберіть місто"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default CitySelector;
