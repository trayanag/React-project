  
import React from 'react';
import styled from 'styled-components'


export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

const CustomButtonContainer = styled.button`
outline: none;
background: transparent;
border: 2px solid #fff;;
border-radius: 5px;
color: #fff;
height: 50px;
width: 40%;
margin: 0 auto;
display: block;
margin-bottom: 10px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
text-transform: uppercase;
font-weight: bolder;
cursor: pointer;

&:hover {
    color: black;
    background-color: white;
    }
&:focus{
        outline: none; 
    }

`;



export default CustomButton;