import styled, { keyframes } from "styled-components";

const StarSC = styled.div`
  top: -10px;
  z-index: -1;
  position: absolute;
  background-color: Cyan;
  left: ${props => props.x}px;
  animation: ${() => moveY} ${props => props.sp}s linear
    ${props => `${props.delay}ms`} infinite normal;
`;

export const SmStarSC = styled(StarSC)`
  width: 1px;
  height: 1px;
`;

export const MdStarSC = styled(StarSC)`
  width: 2px;
  height: 2px;
`;

export const LgStarSC = styled(StarSC)`
  width: 3px;
  height: 3px;
`;

// Stars and Enemies will use this to go from end to end
// of the Container
const moveY = keyframes`
  0%    { transform: translateY(-100px);  }
  100%  { transform: translateY(${window.innerHeight}px);   }
`;
