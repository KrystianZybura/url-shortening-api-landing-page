import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 60px 0 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 45px 0 75px;
  }
`;
