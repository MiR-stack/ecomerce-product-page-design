import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cart } from "../../../../assets/images/icon-cart.svg";

const Container = styled.div`
  position: relative;
  padding: 20px 0;
  z-index: 2;
`;


const Cart_logo_wraper = styled.div`
position: relative;
`

const Item = styled.span`
  position:absolute;
  top:-25%;
  right: -25%;
  background-color: #ff7d1a;
  color:white;
  border-radius: 50%;
  font-size: 10px;
  min-height:18px;
  min-width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

`

const Cart_logo = styled(Cart)`
  cursor: pointer;
`;

const CartBody = styled.div`
  position: absolute;
  left: -1150%;
  top: 100%;
  width: 350px;
  background-color: white;
  box-shadow: 5px 5px 10px hsl(219, 9%, 45%);
  border-radius: 5px;
  min-height: 200px;
  display: ${(props) => (props.cart ? "block" : "none")};
`;

const Title = styled.p`
  padding: 20px;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  font-weight: 700;
`;
const Empty = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(219, 9%, 45%);
  font-weight: 500;
`;

const Wraper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Chekout = styled(Link)`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: hsl(26, 100%, 55%);
  color: hsl(25, 100%, 94%);
  font-weight: 700;
  text-align: center;
`;

export { Container,Cart_logo_wraper,Item, Cart_logo, CartBody, Title, Empty, Wraper, Chekout };
