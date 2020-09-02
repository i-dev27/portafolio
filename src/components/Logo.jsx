import React from "react";
import { ReactComponent as ReactLogo } from "./images/Logo-Isolutions.svg";
import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled(ReactLogo)`
 animation: ${rotate} infinite 20s linear;
  height: 25rem;
  width: 25rem;
  display: block;
  margin: auto;
`;

class Logo extends Component {
  render() {
    return <StyledLogo />;
  }
}

export default Logo;
