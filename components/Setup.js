import styled from "styled-components";
import { Globe, Package, ShoppingBag, Download, User, Share2 } from "lucide-react"; // Icons

const Section = styled.section`
    text-align: center;
    padding: 20px 20px;
    background-color: #fff;
    margin-top: -60px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 1.5rem; /* Reduce font size for mobile */
        margin-top: -30px;
    }
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #666;
    max-width: 500px;
    margin: 0 auto 40px;
    line-height: 1.6;

    @media (max-width: 600px) {
        font-size: 1rem; /* Reduce font size for mobile */
        max-width: 90%; /* Adjust width */
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    border-top: 1px solid #ddd;
    padding-top: 40px;
    position: relative;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
        gap: 20px; /* Reduce gap on tablets */
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* 1 column for mobile */
        gap: 15px; /* Reduce gap on mobile */
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;

    /* Vertical divider lines */
    &:not(:nth-child(3n))::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #ddd;
        right: -20px;
        top: 0;
    }

    /* Row separator */
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
        border-top: 1px solid #ddd;
        padding-top: 40px;
    }

    @media (max-width: 900px) {
        &:nth-child(3)::after {
            display: none;
        }

        &:nth-child(even)::after {
            display: none; /* Remove vertical lines on tablets */
        }
    }

    @media (max-width: 600px) {
        &::after {
            display: none; /* Remove vertical lines on mobile */
        }
        padding: 15px; /* Reduce padding on mobile */
    }
`;

const IconWrapper = styled.div`
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 50%;
    margin-bottom: 15px;
    width: 30px; /* Set a fixed size for the icon wrapper */
    height: 30px; /* Set a fixed height for the icon wrapper */

    @media (max-width: 600px) {
        width: 30px; /* Smaller size on mobile */
        height: 30px; /* Smaller size on mobile */
        margin-top: -20px;
    }
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 1rem; /* Smaller font size on mobile */
    }
`;

const Description = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.5;

    @media (max-width: 600px) {
        font-size: 0.9rem; /* Smaller font size on mobile */
    }
`;
export default function FeaturesSection() {
    const features = [
        { icon: <Globe size={24} />, title: "Visit our website", desc: "Visit our website and navigate to the shop or product section to explore our offerings." },
        { icon: <Package size={24} />, title: "Select Tap Tap product", desc: "Explore our extensive range of products and choose the one that best fits your needs." },
        { icon: <ShoppingBag size={24} />, title: "Shop", desc: "Have your chosen product delivered right to your doorstep after placing your order." },
        { icon: <Download size={24} />, title: "Download Tap Tap App", desc: "Get the Tap Tap app on your phone by downloading it from either the Play Store or the  App Store ." },
        { icon: <User size={24} />, title: "Set up your Profile", desc: "Create your profile by adding your name, photo, and a brief bio. Then, add social media links that you want to share." },
        { icon: <Share2 size={24} />, title: "Tap & Share", desc: "Share your business info by tapping the card on the NFC-enabled phone, or by scanning the QR code if the phone doesn't support NFC." },
    ];

    return (
        <Section>
        <Title>Switch to Tap Tap</Title>
        <Subtitle>Enable Effortless Connection: Share Your Business Info Anywhere, Anytime</Subtitle>
        <Grid>
            {features.map((feature, index) => (
            <Card key={index}>
                <IconWrapper>{feature.icon}</IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <Description>{feature.desc}</Description>
            </Card>
            ))}
        </Grid>
        </Section>
    );
}
