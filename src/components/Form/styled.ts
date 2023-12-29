import styled from "styled-components";
import bgShortenDesktop from "../../assets/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  background-image: url(${bgShortenDesktop});
  background-color: ${({ theme }) => theme.colors.darkViolet};
  padding: 50px 45px;
`;
