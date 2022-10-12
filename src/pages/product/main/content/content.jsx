import PropTypes from "prop-types";
import {
  Buttons,
  Container,
  Discount,
  DiscountPrice,
  Price,
  PriceWraper,
  Quantity,
  QuantityButton,
  Plus,
  Minus,
  ShortDes,
  SubHeader,
  Title,
  CartButton,
  CartIcon,
} from "./content.styled";

function Content({ content,handleCart ,handleIncrease,handleDicrease}) {

  return (
    <Container>
      <SubHeader>{content.company} </SubHeader>
      <Title>{content.title} </Title>
      <ShortDes>{content.shortDes} </ShortDes>
      <div>
        {content.discount ? (
          <PriceWraper>
            <Price>
              $
              {(
                content.price -
                (content.price * content.discount) / 100
              ).toFixed(2)}
            </Price>
            <Discount>{content.discount}% </Discount>
          </PriceWraper>
        ) : (
          <Price>${content.price.toFixed(2)} </Price>
        )}
        {content.discount && (
          <DiscountPrice> ${content.price.toFixed(2)} </DiscountPrice>
        )}
      </div>
      <Buttons>
        <Quantity>
          <QuantityButton onClick={handleDicrease}>
            <Minus />
          </QuantityButton>
          {content.quantity}
          <QuantityButton onClick={handleIncrease}>
            <Plus />
          </QuantityButton>
        </Quantity>
        <CartButton onClick={handleCart}>
          <CartIcon />
          Add to cart
        </CartButton>
      </Buttons>
    </Container>
  );
}

export default Content;

Content.propTypes = {
  content: PropTypes.shape({
    company: PropTypes.string,
    title: PropTypes.string.isRequired,
    shortDes: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
  }),
  handleCart:PropTypes.func.isRequired,
  handleIncrease:PropTypes.func.isRequired,
  handleDicrease:PropTypes.func.isRequired

};
