import { useState, useEffect } from 'react';

import {
  TextField,
  Autocomplete,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { ListWrap } from './ListOffices.styled';

const ListOffices = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  // useEffect(() => {
  //   let active = true;

  //   if (!loading) {
  //     return undefined;
  //   }

  //   (async () => {
  //     await sleep(1e3); // For demo purposes.

  //     if (active) {
  //       setOptions([...topFilms]);
  //     }
  //   })();

  //   return () => {
  //     active = false;
  //   };
  // }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div>
      <Autocomplete
        id="city"
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
      <ListWrap>
        <List>
          {[
            { name: 'Hello' },
            { name: 'my' },
            { name: 'friend' },
            { name: 'a' },
            { name: 'b' },
            { name: 'c' },
            { name: 'd' },
            { name: 'e' },
            { name: 'f' },
            { name: 'g' },
            { name: 'h' },
          ].map(item => (
            <ListItem key={item.name}>
              <ListItemIcon>
                <PlaceOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </ListWrap>
    </div>
  );
};

export default ListOffices;
