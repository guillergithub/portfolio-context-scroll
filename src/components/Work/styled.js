import styled, { keyframes } from "styled-components";
import * as CSS from "../../utils/vars";

const scroll = keyframes`
from {
  transform: translate(0);
}

to {
  transform: translate(calc(-250px * 3.8));
}`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Project1 = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
  margin: 10px 5px 5px 0;


  ${CSS.media.tablet} {
    width: 70%;
  }

  ${CSS.media.screen} {
    width: 50%;
  }
`;

export const Project2 = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;
  margin: 5px 5px 0px 0px;

  ${CSS.media.tablet} {
    width: 70%;
  }

  ${CSS.media.screen} {
    width: 50%;
  }
`;

export const Project3 = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  margin: 10px 0px 5px 5px;
  ${CSS.media.tablet} {
    width: 70%;
  }

  ${CSS.media.screen} {
    width: 50%;
  }
`;

export const Project4 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  margin: 5px 0px 0px 5px;
  ${CSS.media.tablet} {
    width: 70%;
  }

  ${CSS.media.screen} {
    width: 50%;
  }
`;

export const ProjectBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: ${CSS.transition};
  &:hover {
    transform: ${CSS.scale};
    transition: ${CSS.transition};
  }
`;

export const ProjectWrapper = styled.div`
  width: 50%;
  height: 70%;
  margin: 120px auto;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.align && `flex-${props.align}`};
  flex-direction: column;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  background: #2a2a2a;

  ${CSS.media.tablet} {
  }
`;

export const ProjectDescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8); 
  color: ${CSS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    p{
      font-size: 1.6rem;
      font-weight: bold;
    }
    span {
      font-size: 1rem;

    }
`;

export const ProjectDescription = styled.p``;

export const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * 18);
  overflow: hidden;
  animation: ${scroll} 40s linear infinite;
  div {
    perspective: 100px;
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const TechnologiesContainer = styled.div`
  width: 70%;
  height: 30vh;
  text-align: center;
  position: relative;
  display: grid;
  place-items: center center;
  overflow-x: hidden;
  overflow-y: unset;
  &:before,
  &:after {
    background: linear-gradient(
      to right,
      rgba(42, 42, 42, 1) 0%,
      rgba(42, 42, 42, 0) 100%
    );
    content: "";
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
  &:before {
    left: 0;
    top: 0;
  }
  &:after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  img {
    width: 70px;
    height: fit-content;
    margin: 0 20px;
    transition: ${CSS.transition};
    &:hover {
      transform: ${CSS.scale};
      transition: ${CSS.transition};
      z-index: 999;
    }
  }
`;

export const WorkContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  background: #2a2a2a;
`;
