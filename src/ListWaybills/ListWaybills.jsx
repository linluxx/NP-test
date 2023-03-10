import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Container, Waybill, WaybillList } from './ListWaybills.styled';

const ListWaybills = () => {
  return (
    <Container>
      <WaybillList>
        <Waybill>12345678912345</Waybill>
        <Waybill>12345678912345</Waybill>
        <Waybill>12345678912345</Waybill>
      </WaybillList>
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        startIcon={<DeleteOutlinedIcon />}
      >
        Очистити всі ТТН
      </Button>
    </Container>
  );
};

export default ListWaybills;
