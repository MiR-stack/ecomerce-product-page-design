import React, { useContext, useState } from "react";
import {
  CartBody,
  Chekout,
  Container,
  Empty,
  Title,
  Wraper,
  Cart_logo,
  Cart_logo_wraper,
  Item,
} from "./cart.styled";
import CartItem from "./cartItem";
import { CartContext } from "../../../../app";


function Cart() {
  const {products} = useContext(CartContext)

  const [cart, setCart] = useState(false);

  function handleCard() {
    setCart(!cart);
  }

  

  const item = products.reduce((acc, cur) => {
    acc = acc + cur.quantity;
    return acc;
  }, 0);


  return (
    <Container>
      <Cart_logo_wraper>
        <Cart_logo onClick={handleCard} />
        {item > 0 && <Item>{item > 99 ? "99+" : item} </Item>}
      </Cart_logo_wraper>
      <CartBody cart={cart}>
        <Title>Cart</Title>
        <Wraper>
          {products.length < 1 ? <Empty> Your cart is empty</Empty> : null}

          {products.map((product) => (
            <CartItem key={product.orderId} product={product} />
          ))}
          {products > 0 && <Chekout to="/">Chekout</Chekout>}
        </Wraper>
      </CartBody>
    </Container>
  );
}

export default Cart;
