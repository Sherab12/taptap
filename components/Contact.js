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
                    <h3>Address &nbsp;</h3><p>Phuentsholing</p>
                </div>
                </ContactBox>
                <ContactBox>
                <div className="icon">
                    <FaPhone />
                </div>
                <div className="text">
                    <h3>Phone &nbsp;</h3>
                    <p>17989916</p>
                </div>
                </ContactBox>
                <ContactBox>
                <div className="icon">
                    <EnvelopeIcon />
                </div>
                <div className="text">
                    <h3>Email &nbsp;</h3>
                    <p>sherabchoejur@gmail.com</p>
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
            <Blk>
            <div className="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6804947444557!2d89.39090922533822!3d26.850112776684604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb2c210e611d%3A0x44c5cb2cd32b18d4!2sCollege%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbt!4v1681649945537!5m2!1sen!2sbt"
                width="500px"
                height="630px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="people">
                <div className="peo">
                <img src="/image/Tshering.jpg" alt="" />
                <p>
                    <span>Tshering Yangdon</span>
                    <br />
                    Senior Marketing Manager
                    <br />
                    Phone: #975 17386147
                    <br />
                    Email: tsheringyangdon@gmail.com
                </p>
                </div>
                <div className="peo">
                <img src="/image/sherab.jpg" alt="" />
                <p>
                    <span>Sherab Choejur Dorji</span>
                    <br />
                    Senior Marketing Manager
                    <br />
                    Phone: #975 17411756
                    <br />
                    Email: sherab@gmail.com
                </p>
                </div>
                <div className="peo">
                <img src="/image/phurba.jpeg" alt="" />
                <p>
                    <span>Phurba</span>
                    <br />
                    Delivery Team
                    <br />
                    Phone: #975 17346832
                    <br />
                    Email: drukpaphuba108@gmail.com
                </p>
                </div>
                <div className="peo">
                <img src="/image/DSC02099.png" alt="" />
                <p>
                    <span>Dorji Phuntsho</span>
                    <br />
                    Senior Marketing Manager
                    <br />
                    Phone: #975 17989916
                    <br />
                    Email: dorjiphuntsho1491@gmail.com
                </p>
                </div>
                <div className="peo">
                <img src="/image/pema.jpg" alt="" />
                <p>
                    <span>Pema Wangyel</span>
                    <br />
                    Junior Marketing Manager
                    <br />
                    Phone: #975 17517404
                    <br />
                    Email: Peam@gmail.com
                </p>
                </div>
            </div>
            </Blk>
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
`
const Blk= styled.div`
    display: inline-flex;
    .map{
        margin-top: 40px;
        margin-right:  50px;
    }
    .people{
        margin-top: 40px;
    }
`
const ContactSection = styled.section`
    position: relative;
    min-height: 100vh;
    padding: 10px 100px;
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
        background: #ffa0a0;
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
        background: #ffa0a0;
        color: #ffffff;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px 20px;
    }
`;

export default ContactPage;
