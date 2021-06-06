import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./style";

function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) {
  return (
    <StyledIcon {...rest} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
}

Icon.propTypes = {
  children: PropTypes.any,
};

export default Icon;
