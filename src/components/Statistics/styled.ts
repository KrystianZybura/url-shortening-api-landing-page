import styled, { css } from "styled-components";

type MarginProp = {
  $margin?: boolean;
};

export const Box = styled.div<MarginProp>`
  padding: 20px 40px;

  ${({ $margin }) =>
    $margin &&
    css`
      margin-top: 96px;
    `}
`;
