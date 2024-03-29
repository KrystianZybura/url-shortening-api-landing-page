import styled, { css } from "styled-components";
import { MarginProp } from "../../utils/types";

export const Box = styled.div<MarginProp>`
  padding: 20px 40px;
  height: 100%;
  font-size: 17px;

  ${({ $margin }) =>
    $margin &&
    css`
      margin-top: 96px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-top: 48px;
      }
    `}
`;

export const RowContainer = styled.div`
  margin-top: 110px;
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

export const IconWrapper = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  position: relative;
  bottom: 56px;
  padding: 15px;
  border-radius: 50%;
  margin-bottom: -30px;
`;
