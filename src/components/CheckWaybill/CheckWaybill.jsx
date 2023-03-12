import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Button, TextField, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';
import ListWaybills from '../ListWaybills/ListWaybills';
import { waybillInfo } from '../../redux/delivery/operations';

import { Container, Form, Wrapper } from './CheckWaybill.styled';

const CheckWaybill = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const tablet = useMediaQuery('(min-width:600px)');

  const onFormSubmit = evt => {
    evt.preventDefault();
    if (number === '') {
      return toast.warn('Будь-ласка заповніть поле пошуку', {
        autoClose: 2000,
      });
    }
    dispatch(waybillInfo(number));
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
