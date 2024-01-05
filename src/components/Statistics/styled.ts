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

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-top: 0;
      }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.lightGray} 49%,
      ${({ theme }) => theme.colors.cyan} 49%,
      ${({ theme }) => theme.colors.cyan} 51%,
      ${({ theme }) => theme.colors.lightGray} 51%
    );
  }
`;
