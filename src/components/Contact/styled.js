import styled from "styled-components";
import * as CSS from "../../utils/vars";

export const Button = styled.button`
  margin-top: 0px;
  width: 80px;
  margin: 15px auto 0 auto;
  padding: 5px;
  background-color: ${(props) => props.color};
  color: ${CSS.white};
  border-radius: 20px;
  border: none;
  transition: ${CSS.transition};
`;

export const ContactContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background: black;
  background-image: url('https://images.pexels.com/photos/240834/pexels-photo-240834.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  display: flex;
  /* flex-flow: column; */
  align-items: center;
  justify-content: center;
  font-size: 3rem; 
`;

export const FormContainer = styled.form`  
  display: flex;
  flex-flow: column;  
  width: 30%;
  height: 380px;
  background: rgba(21,21,21, 0.68);
  padding: 20px;  
  border-radius: 5px;  
  margin-left: 30px;
`;

export const GreetContainer = styled.div` 
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;    
    width: 25%;
    height: 380px;
    margin-top: 0px;
    margin-right: 30px;
    padding: 20px;     
`;

export const GreetTitle = styled.h5`
  color: ${props => props.color};
  transition: ${CSS.transition};
`;

export const GreetText = styled.div`
  font-size: 1.1rem;
  margin-top: 30px;
`;

export const GreetFooter = styled.div`  
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 40px;
  span{
    font-size: 1rem;    
  }

  svg{
    margin: 5px 10px 0 10px;
    &:hover{
      cursor: pointer;
    }
  }
`;

export const GreetSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    a{
      text-decoration: none;
      color: ${CSS.gray};
    }
`;

export const Input = styled.input`
  outline: none;  
  border: none;
  border-bottom: solid 1px ${CSS.white};
  background: none;
  padding-left: 3px;
  color: ${CSS.white};
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-top: 20px;
  color: ${CSS.white};
  transition: ${CSS.transition};
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  position: absolute;
  /* z-index: -9; */
  display: flex;
  /* flex-flow: column; */
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.textarea`
  background: none;
  padding: 7px;
  outline: none;
  height: 60px;
  margin-top: 10px;
  color: ${CSS.white};
`;
