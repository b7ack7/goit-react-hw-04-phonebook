import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormWrapper = styled(Form)`
outline: 1px solid #cbd6ee;
width: 450px;
padding: 20px;
display: flex;
flex-direction: column;
border-radius: 2px;
`;

export const Label = styled.label`
font-size: 16px;
`;

export const Input = styled(Field)`
width: 200px;
margin-bottom: 20px;
font-size: 16px;
outline: 1px solid #cbd6ee;
border: none;
border-radius: 2px;
`;

export const Button = styled.button`
width: 150px;
appearance: none;
border: 0;
border-radius: 4px;
background: #4676D7;
color: #fff;
padding: 8px 16px;
font-size: 16px;
text-transform: capitalize;
:hover,
:focus {
    background: #1d49aa;
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
}
`;

export const Message = styled.span`
margin-bottom: 10px;
background-color: #cbd6ee;
color: #1d49aa;
border-radius: 2px;
`;