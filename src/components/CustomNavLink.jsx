import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { base } from "../../config";
export default function CustomNavLink({ to = "", children, ...props }) {
  const location = useLocation();

  const handleClick = () => {
    const normalizedPath = location.pathname.endsWith("/")
      ? location.pathname
      : location.pathname + "/";

    const targetPath = `${base}${to}`.endsWith("/")
      ? `${base}${to}`
      : `${base}${to}/`;

    if (normalizedPath === targetPath)
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
