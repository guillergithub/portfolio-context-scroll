import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0;  
  width: 100%;
  height: 100%;
  background: lightblue;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 3rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  position: absolute;
  left: -50px;
  top: ${props => props.top * 10}%;
  font-size: 4rem;    
`;

export const StaticTitle = styled.h3`
  margin-left: -60px;
`;