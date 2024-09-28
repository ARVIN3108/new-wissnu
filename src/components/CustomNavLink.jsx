import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { base } from "../../config";
export default function CustomNavLink({ to = "", children, ...props }) {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname == base + to)
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavLink to={to} {...props} onClick={handleClick}>
      {children}
    </NavLink>
  );
}

CustomNavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};
