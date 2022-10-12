import { ReactComponent as Prev } from "../../../../assets/images/icon-previous.svg";
import { ReactComponent as Next } from "../../../../assets/images/icon-next.svg";
import {
  Container,
  Close,
  Icon,
  Icons,
  Image,
  Thumbnail,
  Thumbnails,
  ThumbWraper,
  Wraper,
} from "./productGallary.styled";
import { useState } from "react";
import PropTypes from "prop-types";
import TransparentBg from "../../../../components/transparentBg/transparentBg";

function ProductGallary({ images, modal, handleModal }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  function handleActiveImage(id) {
    setActiveImage(images.find((image) => image.id === id));
  }

  function handlePrev() {
    const index = images.findIndex((image) => image.id === activeImage.id);
    if (index > 0) {
      setActiveImage(images[index - 1]);
    }
  }
  function handleNext() {
    const index = images.findIndex((image) => image.id === activeImage.id);
    if (index < images.length - 1) {
      setActiveImage(images[index + 1]);
    }
  }

  return (
    <>
      {modal && <TransparentBg handleTriger={handleModal} />}
      <Container modal={modal}>
        <Close modal={modal} onClick={handleModal} />
        <Wraper>
          <Image
            src={activeImage.image}
            alt="main-image"
            onClick={() => {
              if (!modal) handleModal();
            }}
          />
          <Icons modal={modal}>
            <Icon onClick={handlePrev}>
              <Prev />
            </Icon>
            <Icon onClick={handleNext}>
              <Next />
            </Icon>
          </Icons>
        </Wraper>
        <Thumbnails>
          {images.map((image) => (
            <ThumbWraper
              key={image.id}
              id={image.id}
              active={activeImage.id}
              onClick={() => handleActiveImage(image.id)}
            >
              <Thumbnail
                id={image.id}
                active={activeImage.id}
                src={image.thumbnail}
                alt="thumbnail"
              />
            </ThumbWraper>
          ))}
        </Thumbnails>
      </Container>
    </>
  );
}

export default ProductGallary;

ProductGallary.propTypes = {
  images: PropTypes.array.isRequired,
  modal: PropTypes.bool,
  handleModal: PropTypes.func,
};
