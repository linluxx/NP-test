import styled from '@emotion/styled';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WaybillList = styled.ul`
  border: 1px solid #9c27b0;
  padding: 16px;
  width: 200px;
  height: 250px;
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
`;
const Waybill = styled.li`
  cursor: pointer;
  &:first-of-type {
    font-weight: 500;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export { Container, Waybill, WaybillList };
