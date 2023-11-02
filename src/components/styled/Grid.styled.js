import styled from "styled-components";

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-columns-gap: 20px;
  place-items: center;
`;
