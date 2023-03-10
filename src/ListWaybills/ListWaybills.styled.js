import styled from '@emotion/styled';

const Container = styled.div`
  border: 1px solid #9c27b0;
  padding: 16px;
  width: 200px;
  text-align: center;
`;
const Waybill = styled.p`
  font-weight: 500;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export { Container, Waybill };
