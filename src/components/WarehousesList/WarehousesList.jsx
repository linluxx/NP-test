import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { ListWrap, Text } from './WarehousesList.styled';
import { useSelector } from 'react-redux';
import { selectOffices } from '../../redux/offices/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import {
  selectIsLoading,
  selectIsWarehousesLoading,
} from '../../redux/offices/selectors';
import { useMediaQuery } from '@mui/material';

const WarehousesList = () => {
  const offices = useSelector(selectOffices);
  const isLoading = useSelector(selectIsLoading);
  const IsWarehousesLoading = useSelector(selectIsWarehousesLoading);
  const tablet = useMediaQuery('(min-width:600px)');

  return (
    <ListWrap>
      {isLoading || IsWarehousesLoading ? (
        <CircularProgress color="secondary" />
      ) : offices.length === 0 ? (
        <Text>Нажаль відділень за цим адресом не знайдено &#128549; </Text>
      ) : (
        <List>
          {offices.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <PlaceOutlinedIcon />
              </ListItemIcon>
              {tablet ? (
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 17,
                  }}
                  primary={item.Description}
                />
              ) : (
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 14,
                  }}
                  primary={item.Description}
                />
              )}
            </ListItem>
          ))}
        </List>
      )}
    </ListWrap>
  );
};

export default WarehousesList;
