import styled from "styled-components";
import { ReactComponent as Close_icon } from "../../../../assets/images/icon-close.svg";


const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-direction: column;
  width: 400px;
  z-index: 1;
  @media (min-width: 600px) {
    ${(props) =>
      props.modal
        ? `position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:transparent;
    z-index:4;`
        : ""}
  }

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Close = styled(Close_icon)`
  font-size: 18px;
  color: white;
  cursor: pointer;
  display: none;
  @media (min-width: 600px) {
    ${(props) => (props.modal ? "display:block" : "")}
  }
`;

const Wraper = styled.div`
  height: 37vh;
  width: 100%;
  position: relative;
  border-radius: 10px;
  min-height: 400px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const Icons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: none;
  justify-content: space-between;
  @media (min-width: 600px) {
    ${(props) => (props.modal ? "display:flex; width:110%" : "")}
  }
  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    border-radius: 0;
  }
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
`;

const Thumbnails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width:600px){
    display: none;
  }
`;

const ThumbWraper = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.id === props.active
      ? `
  border:3px solid  hsl(26, 100%, 55%);
  `
      : ""}
`;

const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  opacity: ${(props) => (props.id === props.active ? 0.5 : "")};
  border-radius: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

export {
  Container,
  Close,
  Wraper,
  Image,
  Icons,
  Icon,
  Thumbnails,
  ThumbWraper,
  Thumbnail,
};
