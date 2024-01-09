import styled from "styled-components";
import bgShortenDesktop from "../../assets/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  background-image: url(${bgShortenDesktop});
  background-color: ${({ theme }) => theme.colors.darkViolet};
  padding: 50px 45px;
`;

export const Wrapper = styled.section`
  background: linear-gradient(
    #fff 0%,
    #fff 50%,
    ${({ theme }) => theme.colors.lightGray} 50%
  );
`;

export const Input = styled.input``;
