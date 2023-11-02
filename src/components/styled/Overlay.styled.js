import styled from "styled-components";

export const OverlayStyle = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 200px;
  height: 20px;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 7px;
  font-family: Roboto;
  padding:20px 10px;
  text-align: center;
  left: 0px;
  cursor: pointer;

  &:hover {
    opacity: 1;
`;
