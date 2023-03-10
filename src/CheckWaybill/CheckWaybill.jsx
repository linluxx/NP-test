import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Container, Form } from './CheckWaybill.styled';
import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';
import ListWaybills from '../ListWaybills/ListWaybills';
import { useDispatch } from 'react-redux';
import { waybillInfo } from '../redux/delivery/operations';

const CheckWaybill = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = evt => {
    evt.preventDefault();
    dispatch(waybillInfo(number));
    console.log('submit');
  };
  const changeValue = value => {
    setNumber(value);
  };
  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <TextField
          variant="outlined"
          label="Номер ТТН"
          value={number}
          color="secondary"
          onChange={evt => {
            setNumber(evt.target.value);
          }}
          sx={{ width: '270px' }}
        />
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          sx={{ height: '56px' }}
        >
          <SendIcon />
        </Button>
      </Form>
      <Container>
        <DeliveryStatus />
        <ListWaybills changeValue={changeValue} />
      </Container>
    </div>
  );
};

export default CheckWaybill;
