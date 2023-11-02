import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e2e2e2;

  & > div > img {
    width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 100px;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    img {
      width: 140px;s
    }
  }

  & > div {
    padding: 5px 10px;
    color: white;
  }
`;
