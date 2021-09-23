import styled from "styled-components";
import * as CSS from "../../utils/vars";

// const media = {
//   phone: "@media(min-width: 480px)",
//   tablet: "@media(min-width: 760px)",
//   screen: "@media(min-width: 1000px)",
//   LargeScreen: "@media(min-width: 1300px)",
// };

export const DesignContainer = styled.div`
  display: none;
  color: red;
  ${CSS.media.tablet} {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${CSS.media.screen} {
    background: lightblue;
  }
`;

export const GreetingContainer = styled.div`
  /* background: lightgray; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding: 0 60px;
  line-height: 50px;
  h3 {
    font-size: 3rem;    
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

  ${CSS.media.phone} {
    // a partir de 480 sera salmon
    /* background: lightsalmon; */
  }
  ${CSS.media.tablet} {
    width: 50%;
    /* background: lightgreen; */
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    cursor: pointer;
    margin: auto 15px;
  }
`;

export const Greetings = styled.div``;

export const HelloWorld = styled.div`  
  margin-bottom: 30px;    
  font-size: 3.5rem;
  font-weight: 600;
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
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  position: absolute;
  left: -50px;
  top: ${(props) => props.top * 10}%;
  font-size: 4rem;
`;
