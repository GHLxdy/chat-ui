import styled from "styled-components";

const StyledIcon = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${({ opacity }) => (opacity ? `opactity: ${opacity}` : "")}
  }
`;

export default StyledIcon;
