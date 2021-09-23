import styled from 'styled-components';
import * as CSS from '../../utils/vars';

export const AboutContainer = styled.div`  
  margin: 0;  
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 3rem;
`;

export const Container = styled.div`
  display: flex;  
  width: 100%;
`;
export const StaticTitle = styled.h3`  
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 65vh;
  background: lightgreen;
  display: flex;
  justify-content: center;
    p {
      margin-top: 120px;
      font-size: 32px;
    }
`;

export const StudiesContainer = styled.div`
  width: 100%;
  height: 65vh;
  background: lightsalmon;
  display: flex;
  justify-content: center;
  h3 {
      margin-top: 60px;
    }
`;

export const HobbiesContainer = styled.div`
  width: 100%;
  height: 35vh;
  background: lightpink;
  display: flex;
  justify-content: center;
    div {
      width: 200px;
      height: 70%;
      background: lightgray;    
      margin: 0 10px;  
      transition: ${CSS.transition};
        &:hover{
          transform: ${CSS.scale};
          transition: ${CSS.transition};
        }
    }
`;