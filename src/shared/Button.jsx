import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Button({ children, version, type, isDisabled }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
