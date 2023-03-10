import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Container, Waybill, WaybillList } from './ListWaybills.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaybillsList } from '../redux/delivery/selectors';
import { clearWaybills } from '../redux/delivery/slice';
import { waybillInfo } from '../redux/delivery/operations';

const ListWaybills = ({ changeValue }) => {
  const waybills = useSelector(selectWaybillsList);
  const dispatch = useDispatch();

  return (
    <Container>
      <WaybillList>
        <Waybill> Ваші ТТН:</Waybill>
        {waybills.map((item, index) => (
          <Waybill
            key={index}
            onClick={() => {
              changeValue(item);
              dispatch(waybillInfo(item));
            }}
          >
            {item}
          </Waybill>
        ))}
      </WaybillList>
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        startIcon={<DeleteOutlinedIcon />}
        onClick={() => dispatch(clearWaybills())}
      >
        Очистити всі ТТН
      </Button>
    </Container>
  );
};

export default ListWaybills;
