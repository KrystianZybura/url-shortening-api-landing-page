import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
`;

export const Link = styled.a`
  cursor: pointer;
  color: inherit;
  font-size: 14px;
  text-decoration: none;
  transition: color, 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.cyan};
  }
`;
