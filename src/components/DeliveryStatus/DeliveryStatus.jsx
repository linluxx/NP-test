import { useSelector } from 'react-redux';

import {
  selectSentFrom,
  selectSentTo,
  selectStatus,
} from '../../redux/delivery/selectors';

import { StatusText, StatusTitle, StatusWrap } from './DeliveryStatus.styled';

const DeliveryStatus = () => {
  const sentFrom = useSelector(selectSentFrom);
  const sentTo = useSelector(selectSentTo);
  const status = useSelector(selectStatus);

  return (
    <StatusWrap>
      <StatusTitle>
        Статус доставки:{' '}
        <StatusText>
          {status.includes('Номер не найден') ? 'Номер не знайдено' : status}
        </StatusText>
      </StatusTitle>
      <StatusTitle>
        Адреса відправника: <StatusText>{sentFrom}</StatusText>
      </StatusTitle>
      <StatusTitle>
        Адреса отримувача: <StatusText>{sentTo}</StatusText>
      </StatusTitle>
    </StatusWrap>
  );
};
export default DeliveryStatus;
