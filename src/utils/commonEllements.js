import styled from 'styled-components';
import * as CSS from '../utils/vars';

export const SectionContainer = styled.div`
  margin: 0;  
  height: 100vh;
  display: flex;
  flex-flow: column;  
  font-size: 3rem;  
  display: relative;
`;

export const SectionTitle = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  position: fixed;
  left: -230px;
  top: ${props => props.top * 10}%;  
  width: 600px;  
  opacity: .2;
  color: white;
  z-index: 999;
  
  ${CSS.media.phones}{
    
  }

  ${CSS.media.tablet}{
    display: flex;
    font-size: 3rem;
  }
`;

export const Button = styled.button`  
  min-width: 160px;
  height: 50px;
  margin: 0 auto;
  padding: 5px;
  background-color: ${(props) => props.color};
  color: ${CSS.white};
  border-radius: 7px;
  font-size: ${CSS.font_size1};
  border: none;
  transition: ${CSS.transition};
  cursor: pointer;
  z-index: 999999;
   &:hover{
    transition: ${CSS.transition};
     box-shadow: ${CSS.shadow};
     opacity: .8;
   }
`;

export const ColorFont = styled.span`
  color: ${props => props.color};
`;
