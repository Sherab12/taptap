import { primary } from "@/lib/colors";
import { css } from "styled-components";
import styled from "styled-components";

export const ButtonStyle = css`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    svg {
        height: 16px;
        margin-right: 5px;
    }
    &:hover{
        color: #FF8A2A;
        border-color: #FF8A2A;
        transition: 0.3s;
    }
    ${props => props.block && css`
        display: block;
        width: 100%;
    `}
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.black && !props.outline && css`
        background-color: #000;
        color: #fff;
    `}
    ${props => props.black && props.outline && css`
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
    `}
    
    ${props => props.primary && !props.outline && css`
        background-color: transparent; /* No background */
        color: ${primary}; /* Text color blue */
        border: 2px solid ${primary}; /* Blue border */
        transition: 0.3s;

        &:hover {
            color: #FF8A2A; /* Change text to orange */
            border-color: #FF8A2A; /* Change border to orange */
        }
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: ${primary};
        border: 1px solid ${primary};
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg {
            height: 20px;
        }
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}