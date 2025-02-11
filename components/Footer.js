import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from "react";
import './icon.js'; 
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
    background-color: #e3e6f3;
    color: black;
    margin-top: 50px;
    padding-bottom: 30px;
    padding-top: 30px;
    height: 310px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
`;

const FooterColumn = styled.div`
    flex: 1 1 250px;
    padding-left: 15px;
`;

const Logo = styled.img`
    margin-bottom: 0px;
`;

const FooterLink = styled.a`
    display: block;
    font-size: 13px;
    text-decoration: none;
    color: gray;
    margin-bottom: 10px;
`;

const Footer = () => {
    useEffect(() => {
        import('./icon');
    }, []);
    return (
        <StyledFooter>
        <FooterContainer>
            <FooterColumn>
            <Logo src="/image/Gyencha.png" width="70px" height="70px" alt="" />
            <h4>Contact</h4>
            <p>
                <strong>Address: </strong> <>CST, Rhinchending, Chhukha, Bhutan</>
            </p>
            <p>
                <strong>Phone: </strong> +97517517404
            </p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faYoutube} />&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            </FooterColumn>
            <FooterColumn>
            <h4>About</h4>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Delivery Information</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            </FooterColumn>
            <FooterColumn className="install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="/image/apple.jpg" width="100px" height="40px" alt="" />&nbsp;&nbsp;
                <img src="/image/googleplay.jpg" width="100px" height="40px" alt="" />
            </div>
            <p>Secured Payment Gateway</p>
            <img src="/image/mbob.jpg" width="70px" height="40px" alt="" />
            </FooterColumn>
        </FooterContainer>
        <div style={{ textAlign: "center", color: "gray"}}>
            <p>&copy; 2023 Gyencha. All rights reserved.</p>
        </div>
        </StyledFooter>
    );
};
export default Footer;
