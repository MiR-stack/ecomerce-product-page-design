import styled from "styled-components";
import { ReactComponent as Minus_icon } from "../../../../assets/images/icon-minus.svg";
import { ReactComponent as Plus_icon } from "../../../../assets/images/icon-plus.svg";
import { ReactComponent as Cart } from "../../../../assets/images/icon-cart.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;
  @media (max-width:500px){
    width: 100%;
    padding: 20px;
  }
`;

const SubHeader = styled.h5`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: hsl(26, 100%, 55%);
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: calc(2rem + 1vw);
`;
const ShortDes = styled.p`
  color: hsl(219, 9%, 45%);
  font-weight: 500;
`;

const PriceWraper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

const Price = styled.h1`
  font-weight: 700;
`;

const Discount = styled.p`
  background-color: hsl(26, 100%, 55%, 0.1);
  color: hsl(26, 100%, 55%);
  padding: 5px;
  border-radius: 5px;
`;
const DiscountPrice = styled.h3`
  font-weight: 500;
  text-decoration: line-through;
  color: hsl(219, 9%, 45%);
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
   @media (max-width:600px){
    flex-direction: column;
   }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  background-color: hsl(223, 64%, 98%);
  border-radius: 5px;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width:600px){
    padding: 20px;
  }
`;
const Plus = styled(Plus_icon)`
  &:hover {
    filter: invert(32%) sepia(65%) saturate(3205%) hue-rotate(340deg)
      brightness(94%) contrast(111%);
  }
`;
const Minus = styled(Minus_icon)``;

const CartButton = styled.div`
  width: 100%;
  padding: 15px 20px;
  color: white;
  background-color: #ff7d1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

const CartIcon = styled(Cart)`
  filter: invert(100%) sepia(0%) saturate(711%) hue-rotate(118deg)
    brightness(111%) contrast(101%);
`;

export {
  Container,
  SubHeader,
  Title,
  ShortDes,
  PriceWraper,
  Price,
  Discount,
  DiscountPrice,
  Buttons,
  Quantity,
  QuantityButton,
  Plus,
  Minus,
  CartButton,
  CartIcon,
};
