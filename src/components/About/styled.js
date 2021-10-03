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
  padding: 0 10px;
  color: ${CSS.white};
  /* background: lightpink;   */
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const AboutText = styled.div`
  font-size: 1rem;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Hobbie = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;  
  transition: ${CSS.transition};
  border-radius: 5px;
  z-index: 999;
  &:hover {
    transform: ${CSS.scale};
    transition: ${CSS.transition};
  }
  div {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: ${CSS.font_size2};
    margin-top: 10px;
  }
`;

export const HobbiesContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: none;
  justify-content: center;
  ${CSS.media.tablet} {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: space-around;
    width: 80%;
    height: 30vh;
    justify-content: center;
  }
`;

export const HobbieTitle = styled.div`
  position: absolute;
  top: -60px;
  opacity: 0.2;
  h3 {
    font-size: ${CSS.font_title};
  }
`;

export const InfoContainer = styled.div`
  width: 100%;  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 999;
  div {
    text-align: left;
    width: 90%;
  }
  h5 {
    font-size: 2.3rem;
    margin-bottom: 20px;
    color: ${CSS.white};   
  }
  p{ 
    line-height: 25px;
    font-size: 15px;
   }
`;

export const InfoWrapper = styled.div`
  display: none;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  ${CSS.media.tablet} {
    display: flex;
  }
`;

export const LineContainer = styled.div`
  border-top-right-radius: ${(props) => props.radiusLeft && "10px"};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  height: 100%;
  width: 60%;
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
  width: 100%;  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 999;  
  h5 {
    font-size: 2.3rem;
    margin-bottom: 20px;
    color: ${CSS.white};   
  }
  p{ 
    line-height: 25px;
    font-size: 15px;
   }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 70px;
  padding-top: 3%;
  ${CSS.media.tablet} {
    flex-direction: row;
    width: 80%;
    height: 70vh;
    margin-top: 90px;
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

export const NameContainer = styled.div`
  span {
    font-size: ${CSS.font_size3};
  }
  h5 {
    margin-bottom: 20px;
    
  }
`;

export const StudiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
   h5 {
    margin: 20px;
  }
`;
