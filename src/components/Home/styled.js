import styled from "styled-components";
import * as CSS from "../../utils/vars";

export const Circle = styled.svg`
  height: 135%;
  width: 135%;
  position: fixed;
  left: 130px;
  top: 200px;
  animation: 8s ${CSS.rotate} linear infinite;
  path {
    transition: ${CSS.transition};
  }
    ${CSS.media.tablet} {
      display: none;
    }
`;

export const DesignContainer = styled.div`
  display: none;
svg {
    height: 135%;
    width: 175%;
    position: absolute;
    left: 130px;
    top: 0px;
    animation: 50s ${CSS.rotate} linear infinite;
  path {
      transition: ${CSS.transition};
    }
  }
  ${CSS.media.tablet} {
    width: 50%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    svg {
      width: 135%;
    }
  }
`;

export const GreetingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding: 0 10px;  
  line-height: 60px;    
  h3 {
    font-size: 4.3rem;
  }
  p {
    font-size: 2.5rem;
    color: ${CSS.white};
  }
  span {
    font-size: 1.5rem;
    position: relative;
    top: -20px;
    color: ${CSS.white};
  }
  svg {
  }
  ${CSS.media.phone} {
    // a partir de 480 sera salmon
    
  }
  ${CSS.media.tablet} {    
    width: 50%;
    margin-top: 5%;
    /* background: lightgreen; */
  }
`;

export const Greetings = styled.div`
z-index: 999;
  h3 {
    width: fit-content;
  }
`;  


export const HelloWorld = styled.div`
  font-size: 4.5rem;
  font-weight: 600;
  width: 100%;
  line-height: 70px;
  transition: ${CSS.transition};
`;

export const HomeContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* overflow: hidden; */
  position: relative;
`;

export const HireMeContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-bottom: 150px;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  svg {
    cursor: pointer;
    margin: auto 15px;
  }
`;

export const MachineContainer = styled.div`
  h3 {
    color: ${CSS.white};
  }
`;