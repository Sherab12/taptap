import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.div`
    padding: 60px 10%;
    text-align: center;
    margin-bottom: -200px;
`;

const MainTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
    margin-top: 50px;
    text-align: center;
    line-height: 3rem;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const StyledSection = styled(motion.section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    margin-bottom: 60px;

    ${({ reverse }) => reverse && `
        flex-direction: row-reverse;
    `}

    @media (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
    }
`;

const TextContainer = styled.div`
    width: 50%;
    text-align: justify;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const BoldHeading = styled.h2`
    font-size: 28px;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 15px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.8;
    color: #333;
`;

const ImageContainer = styled.div`
    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const AboutSection = ({ reverse, title, description, imgSrc }) => {
    return (
        <StyledSection
            reverse={reverse}
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reverse ? -100 : 100 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <ImageContainer>
                <StyledImage src={imgSrc} alt={title} />
            </ImageContainer>
            <TextContainer>
                <BoldHeading>{title}</BoldHeading>
                <Description>{description}</Description>
            </TextContainer>
        </StyledSection>
    );
};

const About = () => {
    return (
        <SectionWrapper>
            <MainTitle>We’re transforming the way people network—making it easier, faster, and more efficient. Just tap, share & connect!</MainTitle>

            <AboutSection
                title="Seamless Networking"
                description="We revolutionize professional networking with versatile NFC solutions like NFC business cards, rings, key chains, stickers, tags, pet tags, and mini cards etc. Our mission is to enhance networking experiences using cutting-edge NFC technology, enabling seamless and memorable connections with a tap. We offer high-quality products and exceptional customer service to keep our clients ahead in the digital age."
                imgSrc="/image/CST.jpg"
                reverse={false}
            />

            <AboutSection
                title="Why Choose Us?"
                description="Our flagship Tap Tap Card, available in metal, wood, bamboo, and PVC, ensures stylish and efficient information sharing. Designed for NFC-enabled devices, it provides instant access to contact details, reflecting our commitment to innovation and sustainability. Serving a wide range of clients, from individuals to businesses, our products guarantee universal compatibility with both iPhones and Android devices. Beyond NFC cards, our NFC business card app allows easy management and updating of digital cards, promoting sustainability by reducing the need for paper cards. Join Tap Tap Bhutan and be part of the networking revolution with our extensive selection of Tap Tap Cards, setting new standards in professional connections in the digital age."
                imgSrc="/image/CST.jpg"
                reverse={true}
            />
        </SectionWrapper>
    );
};

export default About;
