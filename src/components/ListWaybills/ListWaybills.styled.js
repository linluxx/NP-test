import styled from '@emotion/styled';
import DEVICE from '../../constants/deviceSize';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const WaybillList = styled.ul`
  border: 1px solid #9c27b0;

  padding: 10px;
  width: 100%;
  height: 90px;
  text-align: center;
  overflow: auto;
  margin-bottom: 8px;
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
    background-color: lightgrey;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #9c27b0;
  }
  @media ${DEVICE.tablet} {
    padding: 16px;
    width: 500px;
  }
  @media ${DEVICE.laptop} {
    height: 250px;
    width: 200px;
  }
`;
const Waybill = styled.li`
  cursor: pointer;
  font-size: 14px;
  &:first-of-type {
    font-weight: 500;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media ${DEVICE.tablet} {
    font-size: 17px;
  }
`;

export { Container, Waybill, WaybillList };
