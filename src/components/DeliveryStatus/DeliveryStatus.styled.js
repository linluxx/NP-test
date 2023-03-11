import styled from '@emotion/styled';
import DEVICE from '../../constants/deviceSize';

const StatusWrap = styled.div`
  border: 1px solid #9c27b0;
  padding: 10px;

  /* min-width: 280px; */
  width: 100%;
  height: 250px;
  @media ${DEVICE.tablet} {
    padding: 16px;
    width: 500px;
  }
`;
const StatusTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  @media ${DEVICE.tablet} {
    font-size: 17px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
const StatusText = styled.span`
  font-weight: 400;
  line-height: 1.6;
`;

export { StatusText, StatusTitle, StatusWrap };
