import { useContext, useEffect, useState } from "react";
import PageLayout from "../../layouts/pageLayout/pageLayout";
import PropTypes from "prop-types";
import ProductGallary from "./main/productGallary/productGallary";
import Content from "./main/content/content";
import styled from "styled-components";
import { CartContext } from "../../app";
import {v4 as uuid} from 'uuid'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  gap: 20px;
  padding: 20px;
  @media (max-width: 800px) {
    padding: 50px 20px;
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 700px) {
    padding: 0px;
    gap: 30px;
  }
`;

function Product({ data }) {
  // determine width

  const [width, setWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  });

  // handleModal
  const [modal, setModal] = useState(false);

  function handleModal() {
    if (width > 700) {
      setModal(!modal);
    }
  }

  const initProduct = { ...data, quantity: 0 };

  const [product, setProduct] = useState(initProduct);

  const content = { ...product };
  delete content.images;

  // increase quantity
  function handleIncrease() {
    setProduct({ ...product, quantity: product.quantity + 1 });
  }

  // dicrease quantity
  function handleDicrease() {
    if (product.quantity < 1) return;
    setProduct({ ...product, quantity: product.quantity - 1 });
  }

  // handle cart
  const { products, addProduct } = useContext(CartContext);
  const handleCart = () => {
    if (product.quantity < 1) return;

    product.orderId = uuid()

    addProduct(product);
    setProduct(initProduct);
  };

  console.log(products);


  return (
    <PageLayout>
      {modal && (
        <ProductGallary
          images={product.images}
          modal={modal}
          handleModal={handleModal}
        />
      )}
      <Main>
        <ProductGallary images={product.images} handleModal={handleModal} />

        <Content
          content={content}
          handleCart={handleCart}
          handleDicrease={handleDicrease}
          handleIncrease={handleIncrease}
        />
      </Main>
    </PageLayout>
  );
}

export default Product;

Product.propTypes = {
  data: PropTypes.object.isRequired,
};
