import { StatusText, StatusTitle, StatusWrap } from './DeliveryStatus.styled';

const DeliveryStatus = () => {
  return (
    <StatusWrap>
      <StatusTitle>
        Статус доставки: <StatusText>Отримано</StatusText>
      </StatusTitle>
      <StatusTitle>
        Відправлено: <StatusText>траляляляляля</StatusText>
      </StatusTitle>
      <StatusTitle>
        Отримано: <StatusText>трулюлюлю</StatusText>
      </StatusTitle>
    </StatusWrap>
  );
};
export default DeliveryStatus;
