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

const WarehousesList = () => {
  const offices = useSelector(selectOffices);
  const isLoading = useSelector(selectIsLoading);
  const IsWarehousesLoading = useSelector(selectIsWarehousesLoading);
  console.log(offices);

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
              <ListItemText primary={item.Description} />
            </ListItem>
          ))}
        </List>
      )}
    </ListWrap>
  );
};

export default WarehousesList;
