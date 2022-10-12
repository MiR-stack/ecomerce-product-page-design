import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

function TransparentBg({ handleTriger }) {
  return <TBG onClick={handleTriger} />;
}

export default TransparentBg;

TransparentBg.propTypes = {
  handleTriger: PropTypes.func.isRequired,
};
