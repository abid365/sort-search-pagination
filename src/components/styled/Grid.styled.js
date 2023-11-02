import styled from "styled-components";

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-columns-gap: 20px;
  place-items: center;

  @mdia (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    place-content: center;
    grid-template-columns: 40% 40%;
    grid-row-gap: 20px;
    grid-columns-gap: 20px;
    place-items: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    place-content: center;
    grid-template-columns: 50%;
    grid-row-gap: 20px;
    grid-columns-gap: 20px;
    place-items: center;
  }
`;
