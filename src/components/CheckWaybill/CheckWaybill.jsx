import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Container, Form, Wrapper } from './CheckWaybill.styled';
import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';
import ListWaybills from '../ListWaybills/ListWaybills';
import { useDispatch } from 'react-redux';
import { waybillInfo } from '../../redux/delivery/operations';
import { useMediaQuery } from '@mui/material';

const CheckWaybill = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const tablet = useMediaQuery('(min-width:600px)');

  const onFormSubmit = evt => {
    evt.preventDefault();
    dispatch(waybillInfo(number));
    console.log('submit');
  };
  const changeValue = value => {
    setNumber(value);
  };

  return (
    <Wrapper>
      <Form onSubmit={onFormSubmit}>
        <TextField
          variant="outlined"
          label="Номер ТТН"
          value={number}
          color="secondary"
          onChange={evt => {
            setNumber(evt.target.value);
          }}
          sx={{ width: '290px' }}
        />
        {tablet ? (
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{ height: '56px' }}
          >
            <SendIcon />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{
              height: '40px',
              marginTop: '10px',
              width: '150px',
            }}
            endIcon={<SendIcon />}
          >
            Перевірити
          </Button>
        )}
      </Form>
      <Container>
        <DeliveryStatus />
        <ListWaybills changeValue={changeValue} />
      </Container>
    </Wrapper>
  );
};

export default CheckWaybill;
