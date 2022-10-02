import React, { useState } from 'react'
import { CartBody, Chekout, Container, Empty, Title, Wraper,Cart_logo } from './cart.styled'
import CartItem from './cartItem'

function Cart() {

    const [cart,setCart] = useState(false)

    const product = {
        image:'./assets/image-product-1-thumbnail.jpg',
        title:'fall limited edition sneakers',
        price:125,
        quantity:3,
    }

    function handleCard (){
        setCart(!cart)
    }

  return (
    <Container>
        <Cart_logo onClick={handleCard} />
        <CartBody cart={cart} >
            <Title>Cart</Title>
            <Wraper>
                <CartItem product={product} />
                <Chekout to='/'>Chekout</Chekout>
            </Wraper>
        </CartBody>
    </Container>
  )
}

export default Cart