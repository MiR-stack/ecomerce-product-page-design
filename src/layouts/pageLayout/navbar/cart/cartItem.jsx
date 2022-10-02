import { Content, Image, Product } from "./cartItem.styled";
import PropTypes from "prop-types";
import { ReactComponent as Delete } from "../../../../assets/images/icon-delete.svg";

function CartItem({ product: { title, price, quantity, image } }) {
  return (
    <Product>
      <Image src={image} alt={title} />
      <Content>
        <p>{title} </p>
        <p>
        {`$${price.toFixed(2)}x${quantity}`} <strong>{` $${(price * quantity).toFixed(2)}`} </strong>
        </p>
      </Content>
      <Delete />
    </Product>
  );
}

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};
