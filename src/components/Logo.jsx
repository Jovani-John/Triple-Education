// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";
import { Link } from "react-router";

// ================================
// Logo  Component
// ================================
function Logo({ className }) {
  return (
    <Link
      to={"/"}
      className={`bg-gradient-to-r from-sky-400 to-blue-600
 font-bold text-transparent bg-clip-text select-none ${className}`}
    >
      منصه تريبل
    </Link>
  );
}

// ================================
//  PropTypes Validation
// ================================
Logo.propTypes = {
  className: PropTypes.string,
};
export default Logo;
