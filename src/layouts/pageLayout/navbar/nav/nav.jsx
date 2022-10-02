import { NavItem, Nav, Close } from "./nav.styled";
import {ReactComponent as Close_Icon} from '../../../../assets/images/icon-close.svg'
import PropTypes from 'prop-types'


function Navigation({nav,handleNav}) {
  const data = ["collections", "men", "women", "about", "contract"];

  return (
    <Nav nav={nav}>
      <Close  >
        <Close_Icon onClick={handleNav} />
      </Close>
      {data.map((navitem) => (
        <NavItem key={navitem}>{navitem} </NavItem>
      ))}
    </Nav>
  );
}

export default Navigation;


Navigation.propTypes = {
  nav:PropTypes.bool,
  handleNav:PropTypes.func,
}