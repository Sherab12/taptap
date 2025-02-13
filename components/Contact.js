import Head from 'next/head';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Title from './Title';


const ContactPage = () => {
    return (
        <Main>
        <ContactSection>
            <Title>Reach Us!!</Title>
            <ContactContainer>
            <ContactInfo>
                <ContactBox>
                <div className="icon">
                    <FaMapMarkerAlt />
                </div>
                <div className="text">
                    <tt>Bongday: Paro,
                    121008,
                    Bhutan</tt>
                </div>
                </ContactBox>
                <ContactBox>
                <div className="icon">
                    <FaPhone />
                </div>
                <div className="text">
                    
                    <tt>+97577884478 / +97517558450</tt>
                </div>
                </ContactBox>
                <ContactBox>
                <div className="icon">
                    <EnvelopeIcon />
                </div>
                <div className="text">
                    
                    <tt>taptapbtnfc@gmail.com</tt>
                </div>
                </ContactBox>
            </ContactInfo>
            <ContactForm>
                <form action="https://formsubmit.co/sherabchoejur@gmail.com" method="POST">
                <h2>Send Message</h2>
                <InputBox>
                    <input type="text" name="Name" placeholder="Full Name" required="required" />
                </InputBox>
                <InputBox>
                    <input type="text" name="email" placeholder="Enter your email address" required="required" />
                </InputBox>
                <InputBox>
                    <textarea name="Message" placeholder="Enter your message" required></textarea>
                </InputBox>
                <InputBox>
                    <input type="submit" value="Send" />
                </InputBox>
                </form>
            </ContactForm>
            </ContactContainer>
        </ContactSection>
        </Main>
    );
};
const EnvelopeIcon = styled(FontAwesomeIcon).attrs({ icon: faEnvelope })`
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-style: normal;
`;
const Main= styled.div`
    max-width: 1000px;
    margin-left: 150px;
    margin-right: 50px;
    margin-bottom: -80px;
`

const tt = styled.h3`
    
`
const ContactSection = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: cover;

    .content {
        text-align: center;

        h2 {
        font-size: 36px;
        color: #0d0000;
        }

        p {
        font-weight: 300;
        color: #000000;
        }
    }
    .people{
        height: 630px;
        overflow: hidden;
    }
    img{
        height: 100px;
        width: 100px;
    }
`;

const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

const ContactInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const ContactBox = styled.div`
    position: relative;
    padding: 20px 0;
    display: flex;
    align-items: center;

    .icon {
        min-width: 60px;
        height: 60px;
        background: #FF8A2A;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 22px;
    }

    .text {
        display: flex;
        margin-left: 20px;
        font-size: 16px;
        color: #000000;
    }
`;

const ContactForm = styled.div`
    width: 50%;

    form {
        h2 {
        font-size: 24px;
        color: #0d0000;
        margin-bottom: 20px;
        }
    }
`;

const InputBox = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 25px;

    input,
    textarea {
        width: 100%;
        padding: 5px 0;
        font-size: 16px;
        color: #000000;
        margin-top: 5px;
        border: none;
        border-bottom: 2px solid #d9d9d9;
        outline: none;
        resize: none;
        background: transparent;
    }

    input[type='submit'] {
        background: #FF8A2A;
        color: #ffffff;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px 20px;
    }
`;

export default ContactPage;
