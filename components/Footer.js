import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
    background-color: #FFD700;
    color: black;
    padding: 30px 0;
    margin-top: 30px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterColumn = styled.div`
    flex: 1 1 250px;
    padding: 15px;
    line-height: 1.5rem;
`;

const FooterLink = styled.a`
    display: block;
    font-size: 14px;
    text-decoration: none;
    color: black;
    margin-bottom: 10px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <FooterColumn>
                    <h4>Tap Tap</h4>
                    <p className="">Ugyen Tshering Building,<br />Bongday, <br />Above Agriculture Machinery and Technology Center, <br />Lungyi Gewog, 12008, <br />Paro, Bhutan</p>
                </FooterColumn>
                <FooterColumn>
                    <h4>Shop</h4>
                    <FooterLink href="#">All Products</FooterLink>
                    <FooterLink href="#">PVC Cards</FooterLink>
                    <FooterLink href="#">Metal Cards</FooterLink>
                    <FooterLink href="#">Bamboo/Wooden Cards</FooterLink>
                    <FooterLink href="#">Mini Cards</FooterLink>
                    <FooterLink href="#">Tags and Pet Tags</FooterLink>
                    <FooterLink href="#">Key Hanger</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <h4>Legal</h4>
                    <FooterLink href="#">Terms and Conditions</FooterLink>
                    <FooterLink href="#">Shipping Policy</FooterLink>
                    <FooterLink href="#">Return Policy</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Contact Info</FooterLink>
                </FooterColumn>
                <FooterColumn>
                    <h4>Resources</h4>
                    <FooterLink href="/">Our Other Services</FooterLink>
                    <FooterLink href="/">Affiliate Program</FooterLink>
                    <FooterLink href="/">FAQ</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>
                    <FooterLink href="/">Help Center</FooterLink>
                </FooterColumn>
            </FooterContainer>
            <div style={{ textAlign: "center", margin: "10px 0 0 0"}}>
            <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ margin: "0 10px", color: "black" }} />
                </a>
                <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: "0 10px", color: "black" }} />
                </a>
                <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: "0 10px", color: "black" }} />
                </a>
                <a href="https://tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} size="2x" style={{ margin: "0 10px", color: "black" }} />
                </a>
                <p>&copy; Copyright 2025, All Rights Reserved by Tap Tap</p>
            </div>
        </StyledFooter>
    );
};
export default Footer;