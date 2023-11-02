import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 10px 16px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;
