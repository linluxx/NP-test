import styled from '@emotion/styled';

const ListWrap = styled.div`
  border: 1px solid #9c27b0;
  max-height: 500px;
  overflow: auto;
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

export { ListWrap };
