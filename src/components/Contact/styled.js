import styled from 'styled-components';
import * as CSS from '../../utils/vars';

export const Button = styled.button`
  margin-top: 0px;
  width: 80px;
  margin: 30px auto 0 auto;
  padding: 5px;
  background-color: ${props => props.color};
  color: ${CSS.white};
  border-radius: 20px;
  border: none;
  transition: ${CSS.transition};
`;

export const ContactContainer = styled.div`
  margin: 0;  
  width: 100%;
  height: 100%;
  background: lightgoldenrodyellow;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;    
`;

export const Input = styled.input`
  outline: none;  
  border-radius: 3px;
  border: none;
  border-bottom: solid 1px ${CSS.gray};
  background: none;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  margin-top: 30px;
  color: ${props => props.color};
  transition: ${CSS.transition};
`;

export const TextArea = styled.textarea`
  background: none;
  padding: 7px;
  outline: none;  
  
`;
