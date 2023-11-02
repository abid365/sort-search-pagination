import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e2e2e2;

  & > div > img {
    width: 200px;
    margin: 0 auto;
  }

  & > div {
    padding: 5px 10px;
    color: white;
  }
`;
