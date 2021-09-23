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
  left: -250px;
  top: ${props => props.top * 10}%;  
  width: 600px;  
  opacity: .3;
  color: white;
  z-index: 999;
  
  ${CSS.media.phones}{
    display: flex;
    font-size: 3rem;
  }

  ${CSS.media.tablet}{
    /* font-size: 4rem; */
  }
`;
