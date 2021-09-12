import styled from 'styled-components';
import * as CSS from "../../utils/vars";

export const DotsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;  
  position: fixed;
  z-index: 9;  
  top: 35%;
  right: -100px;
  width: 40px; 
  
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;  
  background: ${CSS.white};
  margin: 20px 0;
  cursor: pointer;
  transform: translateX(${(props) => (!props.$transform ? "-135px" : "0px")});  
  transition: ${CSS.transition};
  -webkit-transition: ${CSS.transition};

`;