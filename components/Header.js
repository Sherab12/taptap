import Link from "next/link";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";

const StyledHeader = styled.header`
    background-color: #ffff;
    padding: 10px 0;
    border-bottom: 2px solid #ffff;
`;

const StyledDiv = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
        height: 40px;
        width: 40px;
        margin-right: -5px;
        margin-left: -10px;
    }
`;

const Gyen = styled.p`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 12px;
    color: black;
    width: 70px;
    margin-top: 27px;
    margin-right: 20px;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const StyledNav = styled.nav`
    display: flex;
    margin-top: 17px;
    margin-left: -25px;
    gap: 20px;
`;

const RightNav = styled.div`
    display: flex;
    margin-bottom: -17px;
    gap: 20px;
    align-items: center;
`;

const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding-bottom: 5px;
    &:hover {
        color: #FF8A2A;
    }
    &:hover::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 3px;
        background-color: #FF8A2A;
    }
`;

const CartButton = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    font-size: 20px;

    span {
        position: absolute;
        top: -5px;
        right: -10px;
        background-color: red;
        color: white;
        border-radius: 50%;
        font-size: 12px;
        padding: 3px 6px;
    }
`;

const CreateAccountButton = styled(Link)`
    background-color: #FF8A2A;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    &:hover {
        background-color:rgb(255, 115, 0);
    }
`;

export default function Header() {
    const { cartProducts } = useContext(CartContext);

    return (
        <StyledHeader>
            <StyledDiv>
                <Logo href={'/'}>
                    <img src="/image/final.svg" alt="Tap Tap Logo" />
                    <Gyen>Tap Tap</Gyen>
                </Logo>
                
                <NavContainer>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>Shop</NavLink>
                        <NavLink href={'/compatible'}>Compatible Phones</NavLink>
                        <NavLink href={'/about'}>About Tap Tap</NavLink>
                        
                    </StyledNav>
                    <RightNav>
                        <CartButton href={'/cart'}>
                            <FiShoppingCart />
                            {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
                        </CartButton>
                        <NavLink href={'/signin'}>Sign in</NavLink>
                        <CreateAccountButton href={'/signin'}>Create Free Account</CreateAccountButton>
                    </RightNav>
                </NavContainer>
            </StyledDiv>
        </StyledHeader>
    );
}