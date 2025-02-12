import styled from "styled-components";
import Center from "./Center";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
    background-color: #D9D9D9;
    color: #222;
    padding: 50px 20px;
    margin: 0px 20px 0px 20px;
    height: 450px;
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 2.8rem;
    margin: 0;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin-top: 10px;
`;

const Desc = styled.p`
    color: #333;
    font-size: 1rem;
    margin-top: 10px;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 550px;
`;

const Image1 = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    
`;

const Image2 = styled.img`
    width: 80%;
    height: auto;
    position: absolute;
    top: 20px;
    right: -30px;
    border-radius: 10px;
    
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
                            <ButtonLink href="/products" style={{ backgroundColor: "#ff7a00", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>
                                Shop Now
                            </ButtonLink>
                            <ButtonLink href="/about" style={{ backgroundColor: "#ff7a00", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>
                                Send Inquiry
                            </ButtonLink>
                        </ButtonsWrapper>
                    </Column>
                    <Column>
                        <ImageWrapper>
                            <Image1 src="/image/Group_37.svg" alt="Business Card 1" />
                            <Image2 src="/image/Card_2.png" alt="Business Card 2" />
                        </ImageWrapper>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}
