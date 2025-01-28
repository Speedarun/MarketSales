import styled from "styled-components";

export const NavItem = styled.div`
display: flex;
  width: 50%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  margin: 5% 2%;
  flex-direction: row;

  &:hover, &:active {
    color: #ffd700;
  }
`;
export const NavTitle = styled.p`

`;

export const NavImg = styled.img`
  margin-top: 5px;
  width: 40px;
  height: 40px;
`;

export const ProfileImg = styled.img`
    margin-top: 30%;
    margin-left: 20%;
    width: 70px;
    height: 70px;
    margin-right: 16%;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const Sidebar = styled.div`
  border-radius: 28px;
  width: 20%;
  background-color:rgb(36, 32, 59);
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Logout = styled.div`
  width: 50%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 30%;

  &:hover {
    color: #ffd700;
  }
`;