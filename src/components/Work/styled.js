import styled from 'styled-components';

export const WorkContainer = styled.div`
  margin: 0;  
  width: 100%;
  height: 100%;
  background: lightcoral;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;  
`;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 1.6rem;
  transition: ${CSS.transition};
  -webkit-transition: ${CSS.transition};  

    li {
      margin: 30px auto;
      cursor: pointer;
      &hover{
        transform: scale(1.3);
        margin-left: 20px;
      }
    }
`;