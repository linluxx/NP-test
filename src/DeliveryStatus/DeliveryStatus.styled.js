import styled from '@emotion/styled';

const StatusWrap = styled.div`
  border: 1px solid #9c27b0;
  padding: 16px;
  width: 500px;
  height: 250px;
`;
const StatusTitle = styled.p`
  font-weight: 500;
  font-size: 17px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
const StatusText = styled.span`
  font-weight: 400;
  line-height: 1.6;
`;

export { StatusText, StatusTitle, StatusWrap };
