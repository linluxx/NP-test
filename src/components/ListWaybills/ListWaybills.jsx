import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectWaybillsList } from '../../redux/delivery/selectors';
import { clearWaybills } from '../../redux/delivery/slice';
import { waybillInfo } from '../../redux/delivery/operations';

import { Container, Waybill, WaybillList } from './ListWaybills.styled';

const ListWaybills = ({ changeValue }) => {
  const waybills = useSelector(selectWaybillsList);
  const dispatch = useDispatch();

  const onClear = evt => {
    dispatch(clearWaybills());
    toast.success('Всі накладні були успішно видалені! 🎉', {
      autoClose: 3000,
    });
  };

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
        sx={{ width: '220px', marginLeft: 'auto', marginRight: 'auto' }}
        type="button"
        variant="outlined"
        color="secondary"
        startIcon={<DeleteOutlinedIcon />}
        onClick={onClear}
      >
        Очистити всі ТТН
      </Button>
    </Container>
  );
};

ListWaybills.propTypes = {
  changeValue: PropTypes.func.isRequired,
};

export default ListWaybills;
