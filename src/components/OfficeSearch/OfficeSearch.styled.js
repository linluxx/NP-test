import styled from '@emotion/styled';
import DEVICE from '../../constants/deviceSize';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${DEVICE.laptop} {
    align-items: flex-start;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  @media ${DEVICE.tablet} {
    font-size: 17px;
  }
`;
export { Container, Text };
