import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
    background-color: #FFD700;
    color: black;
    padding: 30px 20px;
    margin-top: 30px;
`;

const FooterContainer = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
    
    /* Small screens: One column */
    grid-template-columns: 1fr;
    
    @media (min-width: 601px) {
        /* Medium screens: Two columns, two rows */
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1025px) {
        /* Large screens: Four columns in one row */
        grid-template-columns: repeat(4, 1fr);
    }
`;

const FooterColumn = styled.div`
    padding: 15px;
    line-height: 1.5rem;
`;

const FooterLink = styled.a`
    display: block;
    font-size: 14px;
    text-decoration: none;
    color: black;
    margin-bottom: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 20px;
    
    a {
        color: black;
        transition: color 0.3s ease;

        &:hover {
            color: #333;
        }
    }
    @media (min-width: 601px) {
        /* Medium screens: Two columns, two rows */
        justify-content: center;
        align-items: center;
    }

    
`;

const CopyrightText = styled.p`
    margin-top: 10px;
    font-size: 14px;
    @media (min-width: 601px) {
        /* Medium screens: Two columns, two rows */
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <FooterColumn>
                    <h4>Tap Tap</h4>
                    <p>Ugyen Tshering Building,<br />Bongday, <br />Above Agriculture Machinery and Technology Center, <br />Lungyi Gewog, 12008, <br />Paro, Bhutan</p>
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

            <SocialIcons>
                <a href="https://wa.me/97577448878" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="https://www.instagram.com/taptapnfc?igsh=ZG52cTZpeDdwNjl2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.facebook.com/share/19RdkbpBUR/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.tiktok.com/@taptapbtn?_t=ZS-8u4mbAic3E8&_r=1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>
            </SocialIcons>

            <CopyrightText>&copy; 2025 Tap Tap. All Rights Reserved.</CopyrightText>
        </StyledFooter>
    );
};

export default Footer;
