import styled from '@emotion/styled';

const ListWrap = styled.div`
  border: 1px solid #9c27b0;
  min-height: 250px;
  max-height: 500px;
  overflow: auto;
  padding: 16px;
  ::-webkit-scrollbar {
    width: 9px;
    border-radius: 4px;
    background-color: lightgrey;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #9c27b0;
  }
`;

const Text = styled.p`
  font-weight: 500;
`;

export { ListWrap, Text };
