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
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${DEVICE.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;
const Container = styled.div`
  /* display: flex;
  justify-content: space-between; */
  @media ${DEVICE.laptop} {
    display: flex;
  }
`;

export { Container, Form, Wrapper };
