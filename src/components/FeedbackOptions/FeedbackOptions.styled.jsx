import styled from '@emotion/styled';


export const SectionFeedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    color: yellow;
    background-color: lightblue;
    cursor: pointer;
  }
`;
