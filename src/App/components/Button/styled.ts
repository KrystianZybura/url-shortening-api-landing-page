import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.cyan} !important;
  align-self: center;
  transition: background-color, 0.3s transform, 0.3s;
  border: none;

  &:hover {
    transform: scale(110%);
  }

  &:active {
    filter: brightness(110%);
  }

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
  }
`;
