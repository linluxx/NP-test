import styled from '@emotion/styled';
import DEVICE from '../../constants/deviceSize';

const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;

  @media ${DEVICE.tablet} {
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
  }
`;

const Form = styled.form`
  text-align: center;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${DEVICE.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;
const Container = styled.div`
  @media ${DEVICE.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

export { Container, Form, Wrapper };
