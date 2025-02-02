import styled from "styled-components";

export const NavItem = styled.div`
  display: flex;
  width: 50%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  margin: 5%;
  gap: 10%;

  &:hover,
  &:active {
    color: #ffd700;
  }
`;
