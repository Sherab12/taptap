import Head from 'next/head';
import styled from 'styled-components';
import Title from './Title';

const StyledSection = styled.section`
    padding: 5px 250px;
    max-width: 80%;
`;

const StyledImage = styled.img`
    margin-top: 40px;
    width: 50%;
    height: 200px;
`;

const StyledContent = styled.div`
    padding-left: 10px;
    width: 55%;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
`;

const About = () => {
    return (
        <>
            <StyledSection id="page-header" className="about-header">
                <center><Title>Contact Us</Title></center>
                <center><p><i>We would Love to hear from you!</i></p></center>
            </StyledSection>

            <StyledSection id="about-head" className="section-p1">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <StyledImage src="/image/CST.jpg" alt="" />
                <StyledContent>
                    <center><Title>Who We Are?</Title></center> 
                    <p style={{ textAlign: 'justify', fontFamily: 'times' }}>
                        <i>
                        Welcome to our website, where we specialize in selling traditional Bhutanese clothes! Our company was
                        founded with a passion for preserving and sharing the beautiful cultural heritage of Bhutan through its
                        clothing. Our mission is to provide customers with authentic and unique
                        clothing options that reflect the rich history and traditions of Bhutan. We take great care in selecting
                        each item in our collection and strive to provide excellent customer service to ensure a positive shopping
                        experience. Thank you for choosing us as your source for traditional Bhutanese clothes!
                        </i>
                    </p>
                </StyledContent>
                </div>
            </StyledSection>
        </>
    );
};

export default About;
