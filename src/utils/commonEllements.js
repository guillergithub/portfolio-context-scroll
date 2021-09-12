import styled from 'styled-components';

// const media = {
//   tablet: "@media(min-width: 760px)",
//   screen: "@media(min-width: 1000px)",
//   LargeScreen: "@media(min-width: 1300px)",
// };


export const SectionContainer = styled.div`
  margin: 0;  
  height: 100vh;
  display: flex;
  flex-flow: column;  
  font-size: 3rem;  
  display: relative;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  position: fixed;
  left: -230px;
  top: ${props => props.top * 10}%;
  font-size: 4rem;
  width: 600px;  
  opacity: .3;
  color: white;
  z-index: 999;
`;
