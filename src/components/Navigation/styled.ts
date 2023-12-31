import styled from "styled-components";

export const ButtonLink = styled.a`
  background-color: ${({ theme }) => theme.colors.cyan};
  transition: background-color, 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.cyan};
    filter: brightness(110%);
  }
`;
