import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../../../assets/images/icon-menu.svg";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  border-bottom: 1px solid hsl(219, 9%, 45%);
  margin:0 30px;
  @media (max-width: 700px) {
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: none;
  }
`;

const Brand_name = styled(Link)`
  color: hsl(220, 13%, 13%);
  font-weight: 700;
  font-size: calc(1.5rem + .5vw);
`;

const Menu_Icon = styled(Menu)`
  display: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
`;

const Brand_wraper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const User = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 2px solid hsl(26, 100%, 55%);
  }

  @media (max-width:700px){
   height: 40px;
   width: 40px;
  }
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width:700px){
   width: unset;
  }
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export { Container, Brand_name, User, Wraper, Auth, Brand_wraper, Menu_Icon };
