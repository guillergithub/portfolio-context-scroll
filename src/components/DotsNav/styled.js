import styled from 'styled-components';
import * as CSS from "../../utils/vars";

const media = {
  phone: "@media(min-width: 480px)",
  tablet: "@media(min-width: 760px)",
  screen: "@media(min-width: 1000px)",
  LargeScreen: "@media(min-width: 1300px)",
};

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
  display: none;
  ${media.tablet} {
      display: flex;
      z-index: 1;  
    }  
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;  
  background: ${props => props.color === "white" ? CSS.white : props.color};
  margin: 20px 0;
  cursor: pointer;
  transform: translateX(${(props) => (!props.transform ? "-135px" : "0px")});  
  transition: ${CSS.transition};
  -webkit-transition: ${CSS.transition};
`;