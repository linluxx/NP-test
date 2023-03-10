import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Container, Form } from './CheckWaybill.styled';
import DeliveryStatus from '../DeliveryStatus/DeliveryStatus';
import ListWaybills from '../ListWaybills/ListWaybills';

const CheckWaybill = () => {
  const [number, setNumber] = useState('');

  const onFormSubmit = evt => {
    evt.preventDefault();
    console.log('submit');
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
        <ListWaybills />
      </Container>
    </div>
  );
};

export default CheckWaybill;
