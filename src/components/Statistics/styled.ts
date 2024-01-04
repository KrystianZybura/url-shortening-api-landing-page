import styled, { css } from "styled-components";

type MarginProp = {
  $margin?: boolean;
};

export const Box = styled.div<MarginProp>`
  padding: 20px 40px;
  height: 100%;

  ${({ $margin }) =>
    $margin &&
    css`
      margin-top: 96px;
    `}
`;

export const RowContainer = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.lightGray} 49%,
    ${({ theme }) => theme.colors.cyan} 49%,
    ${({ theme }) => theme.colors.cyan} 52%,
    ${({ theme }) => theme.colors.lightGray} 52%
  );
`;
