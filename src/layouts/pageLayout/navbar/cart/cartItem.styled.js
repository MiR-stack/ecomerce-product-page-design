import styled from "styled-components"

const Product = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
`

const Image  = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 5px;
`
const Content = styled.div`
    color:hsl(219, 9%, 45%);
    text-transform: capitalize;
`


export {Product,Image,Content}