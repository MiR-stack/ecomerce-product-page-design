import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled(Link)`
  color: hsl(219, 9%, 45%);
  padding: 30px 0;
  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-transform: capitalize;

  @media (max-width: 700px) {
    position: fixed;
    top:0;
    left: ${props => props.nav?'0%':'-100%'};
    flex-direction: column;
    background-color: white;
    width: 200px;
    align-items: flex-start;
    height: 100vh;
    transition:.3s linear;
  }
`;

const Close = styled.span`
  padding: 30px 20px;
  text-align: right;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

export { Nav, NavItem, Close };
