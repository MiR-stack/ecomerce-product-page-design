import { useState } from "react";
import TransparentBg from "../../../components/transparentBg/transparentBg";
import Cart from "./cart/cart";
import Nav from "./nav/nav";
import {
  Container,
  User,
  Wraper,
  Auth,
  Brand_name,
  Brand_wraper,
  Menu_Icon,
} from "./navbar.styled";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <Container>
      {nav && <TransparentBg handleTriger={handleNav} />}
      <Brand_wraper>
        <Menu_Icon onClick={handleNav} />
        <Brand_name to="/">sneakers</Brand_name>
      </Brand_wraper>
      <Wraper>
        <Nav nav={nav} handleNav={handleNav} />
        <Auth>
          <Cart />
          <User>
            <img
              style={{ height: "100%", width: "100%" }}
              src="./assets/image-avatar.png"
              alt="user"
            />
          </User>
        </Auth>
      </Wraper>
    </Container>
  );
};

export default Navbar;
