import styled from "styled-components";
import * as CSS from "../../utils/vars";

export const AboutContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 3rem;
  color: ${CSS.white};
  /* background: lightpink;   */
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const AboutText = styled.div`
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

// export const Circle = styled.svg`
//   height: 135%;
//   width: 40%;
//   position: absolute;
//   opacity: .7;
//   /* left: 130px;
//   top: 200px; */
//   animation: 8s ${CSS.rotate} linear infinite;
//   path {
//     transition: ${CSS.transition};
//   }
//      ${CSS.media.tablet} {
//       /* top: 1200px; */
//     }
// `;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ${CSS.media.tablet} {
  }
`;

export const Hobbie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 70px;
  transition: ${CSS.transition};
  border-radius: 5px;
  margin-top: 30px;
  z-index: 999;
  &:hover {
    transform: ${CSS.scale};
    transition: ${CSS.transition};
    box-shadow: ${CSS.shadow};
  }
  div {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: 1rem;
  }
`;

export const InfoContainer = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  h5 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${CSS.white};
  }
`;
export const LineContainer = styled.div`
  border-top-right-radius: ${(props) => props.radiusLeft && "10px"};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 20px 20px 0 20px;
  ${CSS.media.tablet} {
    height: 60%;
    /* border-left: 2.5px ${(props) => (props.isLeft ? "solid" : "none")}
      ${(props) => props.color};
    border-right: 2.5px ${(props) => (!props.isLeft ? "solid" : "none")}
      ${(props) => props.color}; */
  }
`;

export const StudiesContainer = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 999;
  h5 {
    font-size: 2rem;
    margin: 0 auto;
    color: ${CSS.white};
  }
  p {
    font-size: 1rem;
    font-weight: 600;
  }
  span {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const HobbiesContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: none;
  justify-content: flex-start;
  align-items: space-around;
  flex-direction: column;

  ${CSS.media.tablet} {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 30vh;
    justify-content: center;
  }
`;

export const HobbieTitle = styled.div`
  position: absolute;
  opacity: 0.2;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: flex-end;
  ${CSS.media.tablet} {
    flex-direction: row;
    width: 80%;
    height: 70vh;
  }
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${CSS.media.tablet} {
    flex-direction: row;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
  span {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: none;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  ${CSS.media.tablet} {
    display: flex;
  }
`;

export const StudiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
