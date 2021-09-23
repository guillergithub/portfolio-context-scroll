import styled, { keyframes } from 'styled-components';
import * as CSS from '../../utils/vars';

export const Container = styled.div`
  width: 50%;
  height: 100%;
  background: lightgreen;
  margin: 0 auto;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 70vh;
  text-align: center;  
`;

const scroll = keyframes`
from {
  transform: translate(0);
}

to {
  transform: translate(calc(-250px * 3.8));
}`;

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
      background: linear-gradient(to right, rgba(211,211,211,1) 0%, rgba(211,211,211,0) 100%);
      content: '';
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
        &:hover{
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
  background: lightgray;

`;
