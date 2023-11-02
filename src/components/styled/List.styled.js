import styled from "styled-components";

export const List = styled.li`
  border: 1px solid #444947;
  border-radius: 50%;
  padding: 4px 4px;
  color: #444947;
  text-decoration: none;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
  }
`;
