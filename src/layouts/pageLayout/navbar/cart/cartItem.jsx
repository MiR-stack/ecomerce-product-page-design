import { Content, Image, Product } from "./cartItem.styled";
import PropTypes from "prop-types";
import { ReactComponent as Delete } from "../../../../assets/images/icon-delete.svg";
import { useContext } from "react";
import { CartContext } from "../../../../app";

function CartItem({ product: { orderId,title, price, quantity, images } }) {

  const {removeProduct} = useContext(CartContext)


  return (
    <Product>
      <Image src={images[0].thumbnail} alt={title} />
      <Content>
        <p>{title} </p>
        <p>
          {`$${price.toFixed(2)}x${quantity}`}{" "}
          <strong>{` $${(price * quantity).toFixed(2)}`} </strong>
        </p>
      </Content>
      <Delete onClick={()=>removeProduct(orderId)} />
    </Product>
  );
}

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};
