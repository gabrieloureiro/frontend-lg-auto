import styled from '@emotion/styled'

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  padding: 16px;
  margin: 5px 0;
  width: 100%;
	transition: 0.5s all ease;

  &::placeholder {
    color: ${(props) => props.theme.text};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.primaryColor};
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
