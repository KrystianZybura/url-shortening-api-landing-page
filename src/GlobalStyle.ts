import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  #root {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray};
    letter-spacing: 0.5px;
    background: linear-gradient(
      to bottom,
      #fff 0px,
      #fff 670px,
      ${({ theme }) => theme.colors.lightGray} 400px,
      ${({ theme }) => theme.colors.lightGray} 100%
    );
  }
`;
