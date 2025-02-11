import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

const StyledHeader = styled.header`
    background-color:  #e3e6f3;
`;
const Logo = styled(Link)`
    color:black;
    font-weight: 500;
    text-decoration:none;
    position: relative;
    z-index: 3;
    display: inline-flex;
    flex-direction: row;
    height: 40px;
    img{
        margin-top: 0px;
        height: 40px;
        width: 40px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    ${props => props.mobileNavActive? `display:block;`:`display:none;`}
    display: block;
    gap: 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color:  #e3e6f3;
    margin-top: 10px;
    @media screen and (min-width: 768px){
        display: flex;
        position: static;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    display: block;
    color:black;
    text-decoration:none;
    padding: 10px 0;
    @media screen and (min-width: 768px){
        padding: 0;
    }
`;
const Gyen = styled.p`
    margin-left: 10px;
    margin-top: 10px;
`;
const NavButton = styled.button`
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: 0;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 3;
    @media screen and (min-width: 768px){
        display: none;
    }
`;
export default function Header(){
    const {cartProducts} = useContext(CartContext);
    const [mobileNavActive,setMobileNavActive] = useState(false);
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}><img src="/image/Gyencha.png"/><Gyen>Gyencha</Gyen></Logo>
                    <StyledNav mobileNavActive={mobileNavActive}>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>All products</NavLink>
                        {/* <NavLink href={'/about'}>About Us</NavLink> */}
                        <NavLink href={'/about'}>Contact Us</NavLink>
                        <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                        <NavLink href={'/login'}>Sign Up</NavLink>
                    </StyledNav>
                    <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
                        <BarsIcon />
                    </NavButton>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}