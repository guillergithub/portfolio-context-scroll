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
  font-size: ${CSS.font_size1};
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
  align-items: center;
  justify-content: center;
  font-size: 3rem; 
`;

export const FormContainer = styled.form`  
  display: flex;
  flex-flow: column;  
  width: 70%;  
  background: rgba(21,21,21, 0.68);
  padding: 20px;  
  border-radius: 5px;    
  height: fit-content;
  margin: 0 auto;
  ${CSS.media.phones}{
    width: 65%;
  }
    ${CSS.media.tablet}{        
      width: 50%;        
    }
    ${CSS.media.screen}{          
      width: 30%;    
      margin-left: 30px;
    }
`;

export const GreetContainer = styled.div` 
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;    
    width: 80%;    
    margin: 0 auto;    
      ${CSS.media.screen}{                
      width: 30%;    
      margin: 0 auto;  
      margin-right: 30px;
      justify-content: flex-start;    

    }
`;

export const GreetTitle = styled.h3`
  color: ${props => props.color};
  transition: ${CSS.transition};
  font-size: 2rem;    
  width: 100%;
  text-align: center;
  ${CSS.media.phones}{
      margin: 0 auto;
      width:50%;
    }
    ${CSS.media.tablet}{      
      width: 100%;
      font-size: 2.6rem;
      text-align: center;
    }
    ${CSS.media.screen}{            
      font-size: 3rem;
      line-height: 50px;
      text-align: left;
    }
`;

export const GreetText = styled.div`
  font-size: 1.2rem;
  color: ${CSS.white};  
  display: none;
  margin-top: 30px;
  ${CSS.media.screen}{
      display: inline-block;
    }`;

export const GreetFooter = styled.div`  
  display: none;
  flex-flow: column;
  align-items: center;  
  
    span{
      display: inline-block;
      font-size: 1.2rem;    
      text-align: center;    
      width: 100%;
      color: ${CSS.white};
    }
    svg{
      margin: 0px 10px 0 10px;
      &:hover{
        cursor: pointer;
      }
    }
      ${CSS.media.screen}{
        display: flex;        
          width: 100%;
          height: fit-content;
          justify-content: flex-start;
          margin-top: 20px;
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
  flex-flow: column;
  justify-content: center;
  align-items: center;
  ${CSS.media.screen}{
    flex-flow: row;
  }

`;

export const TextArea = styled.textarea`
  background: none;
  padding: 7px;
  outline: none;
  height: 60px;
  margin: 10px;
  color: ${CSS.white};
`;
