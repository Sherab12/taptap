import Link from "next/link";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CartContext } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const StyledHeader = styled.header`
    background-color: #fff;
    padding: 10px 0;
    border-bottom: 2px solid #fff;
    position: fixed;
    width: 100%;
    top: ${({ isVisible }) => (isVisible ? "0" : "-80px")};
    transition: top 0.3s ease-in-out;
    z-index: 1000;
`;

const StyledDiv = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;


// Logo stays the same
const Logo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
        height: 40px;
        width: 40px;
    }

    @media (max-width: 768px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
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
    align-items: center;
    flex-grow: 1;
`;

// Mobile menu button (hamburger)
const MobileMenuButton = styled.button`
    background: none;
    border: none;
    display: none;
    font-size: 24px;
    @media (max-width: 768px) {
        display: block;
    }
`;

// Main navigation links container
const StyledNav = styled.nav`
    display: flex;
    gap: 20px;
    margin-top: 17px;
    margin-left: -25px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightNav = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    margin-bottom: -17px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    color: ${({ active }) => (active ? "#FF8A2A" : "black")};
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding-bottom: 5px;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: ${({ active }) => (active ? "100%" : "0")};
        height: 3px;
        background-color: ${({ active }) => (active ? "#FF8A2A" : "transparent")};
        transition: width 0.3s ease-in-out;
    }

    &:hover {
        color: #FF8A2A;
    }
    &:hover::after {
        width: 100%;
        background-color: #FF8A2A;
    }
`;

const CartButton = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    color: ${({ active }) => (active ? "#FF8A2A" : "black")};
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s ease;

    &:hover {
        color: #FF8A2A;
    }

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

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: black; /* Default color */

    &:hover {
        color: #FF8A2A; /* Hover effect */
    }

    z-index: 1200; /* Ensures it's always above other elements */
`;


const CreateAccountButton = styled(Link)`
    background-color: #FF8A2A;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        background-color: rgb(255, 115, 0);
        transform: scale(1.05);
    }
`;

// Mobile navigation overlay
const MobileNavOverlay = styled.div`
    position: fixed;
    top: 0;
    left: ${({ show }) => (show ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background: #fff;
    transition: left 0.3s ease-in-out;
    z-index: 1100;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 60px; /* Moves menu items down */
    
    @media (min-width: 769px) {
        display: none;
    }
`;

const MobileNavLink = styled(Link)`
    font-size: 18px;
    color: black;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    &:hover {
        color: #FF8A2A;
        border-color: #FF8A2A;
    }
`;

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    const router = useRouter();

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY < lastScrollY || window.scrollY < 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
        };

        const handleMouseMove = (e) => {
        if (e.clientY < 80) setIsVisible(true);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastScrollY]);

    // Close mobile menu on navigation
    const handleNavClick = (href) => {
        router.push(href);
        setMobileNavOpen(false);
    };

    return (
        <>
        <StyledHeader isVisible={isVisible}>
            <StyledDiv>
            <Logo href={"/"}>
                <img src="/image/final.svg" alt="Tap Tap Logo" />
                <Gyen>Tap Tap</Gyen>
            </Logo>
            <NavContainer>
                <MobileMenuButton onClick={() => setMobileNavOpen(true)}>
                <HiOutlineMenu />
                </MobileMenuButton>
                <StyledNav>
                <NavLink href={"/"} active={router.pathname === "/"}>
                    Home
                </NavLink>
                <NavLink
                    href={"/products"}
                    active={
                    router.pathname === "/products" ||
                    router.pathname.startsWith("/product")
                    }
                >
                    Shop
                </NavLink>
                <NavLink
                    href={"/compatible"}
                    active={router.pathname === "/compatible"}
                >
                    Compatible Phones
                </NavLink>
                <NavLink href={"/about"} active={router.pathname === "/about"}>
                    About Tap Tap
                </NavLink>
                </StyledNav>
                <RightNav>
                <CartButton href={"/cart"} active={router.pathname === "/cart"}>
                    <FiShoppingCart />
                    {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
                </CartButton>
                <NavLink href={"/signin"} active={router.pathname === "/signin"}>
                    Sign in
                </NavLink>
                <CreateAccountButton href={"/signup"}>
                    Create Free Account
                </CreateAccountButton>
                </RightNav>
            </NavContainer>
            </StyledDiv>
        </StyledHeader>

        {/* Mobile Navigation Overlay */}
        <MobileNavOverlay show={mobileNavOpen}>
        <CloseButton onClick={() => setMobileNavOpen(false)}>
            <HiOutlineX />
        </CloseButton>

            <MobileNavLink href="/" onClick={() => handleNavClick("/")}>
            Home
            </MobileNavLink>
            <MobileNavLink
            href="/products"
            onClick={() => handleNavClick("/products")}
            >
            Shop
            </MobileNavLink>
            <MobileNavLink
            href="/compatible"
            onClick={() => handleNavClick("/compatible")}
            >
            Compatible Phones
            </MobileNavLink>
            <MobileNavLink
            href="/about"
            onClick={() => handleNavClick("/about")}
            >
            About Tap Tap
            </MobileNavLink>
            <MobileNavLink
            href="/signin"
            onClick={() => handleNavClick("/signin")}
            >
            Sign in
            </MobileNavLink>
            <MobileNavLink
            href="/signup"
            onClick={() => handleNavClick("/signup")}
            >
            Create Free Account
            </MobileNavLink>
            <MobileNavLink
            href="/cart"
            onClick={() => handleNavClick("/cart")}
            style={{ display: "flex", alignItems: "center" }}
            >
            <FiShoppingCart style={{ marginRight: "5px" }} />
            Cart {cartProducts.length > 0 && `(${cartProducts.length})`}
            </MobileNavLink>
        </MobileNavOverlay>
        </>
    );
}
