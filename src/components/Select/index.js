import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "./style";

function Select({ type, children, ...rest }) {
  return (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
}

Select.propTypes = {
  children: PropTypes.any,
};

export default Select;
