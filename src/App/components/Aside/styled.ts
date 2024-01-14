import styled from "styled-components";
import bgBoostDesktop from "../../assets/bg-boost-desktop.svg";

export const StyledAside = styled.aside`
  background-color: ${({ theme }) => theme.colors.darkViolet};
  background-image: url(${bgBoostDesktop});
`;
