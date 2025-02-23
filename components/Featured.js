import styled from "styled-components";
import Center from "./Center";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
    background-color: #D9D9D9;
    color: #222;
    padding: 50px 20px;
    margin: 65px 20px;
    height: auto; /* Adjusted for responsive height */
    display: flex;
    align-items: center;
    flex-direction: column; /* For mobile alignment */
    @media (max-width: 768px) {
        background-color: #ffff;
    }
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 2.9rem;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.97rem; /* Smaller title on mobile */
        margin-top: -70px;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 1.3rem; /* Adjusted subtitle size */
    }
`;

const Desc = styled.p`
    color: #333;
    font-size: 1.1rem;
    margin-top: 10px;
    line-height: 2.0;

    @media (max-width: 768px) {
        font-size: 1rem; /* Slightly smaller description */
    }
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin-top: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack columns on mobile */
        gap: 20px; /* Reduced gap on mobile */
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Ensure buttons wrap on smaller screens */
    width: 100%; /* Take full width */
    justify-content: center; /* Horizontally center the buttons */
    text-align: center; /* Ensure text inside buttons is centered */
`;


const StyledButtonLink = styled(ButtonLink)`
    background-color: #FF8A2A;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: rgb(255, 115, 0);
        transform: scale(1.05);
        color: #fff;
    }

    @media (max-width: 768px) {
        padding: 8px 16px; /* Adjust button size for mobile */
        justify-content: center;
        align-items: center;
        margin-left: 20px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    align-items: center;
    width: 100%;
    max-width: 1000px;

    @media (max-width: 768px) {
        justify-content: center; /* Center image on mobile */
        margin-top: 30px; /* Adjust top margin */
    }
`;

const Image1 = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 90%; /* Adjust image size on mobile */
    }
`;

const Image2 = styled.img`
    width: 90%;
    height: auto;
    position: absolute;
    top: 10px;
    right: -70px;
    border-radius: 10px;

    @media (max-width: 768px) {
        right: 0; /* Adjust positioning on mobile */
        width: 80%; /* Adjust image size on mobile */
    }
`;


export default function Featured() {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <Title>Tap Tap Business Cards</Title>
                        <Subtitle>Revolutionizing Networking, Tap by Tap</Subtitle>
                        <Desc>
                            Experience seamless connectivity redefined by Tap Tap. With cutting-edge NFC technology, 
                            traditional business cards are a thing of the past. Elevate your networking game effortlessly.
                        </Desc>
                        <ButtonsWrapper>
                            <StyledButtonLink href="/products">Shop Now</StyledButtonLink>
                            <StyledButtonLink href="/about">Send Inquiry</StyledButtonLink>
                        </ButtonsWrapper>
                    </Column>
                    <Column>
                        <ImageWrapper>
                            <Image2 src="/image/Group_37.svg" alt="Business Card 1" />
                            <Image1 src="/image/Card2.png" alt="Business Card 2" />
                        </ImageWrapper>
                    </Column>
                </ColumnsWrapper>
            </Center>
            
        </Bg>
        
    );
}