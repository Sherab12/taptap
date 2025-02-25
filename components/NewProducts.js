import styled from "styled-components";
import Center from "./Center";
import ProductsSlider from "./NewProductsGrid";
import ButtonLink from "./ButtonLink";

const Title = styled.h2`
    font-size: 1.7rem;
    margin-top: 10px;
    font-weight: normal;
    color: #B0B0B0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const Title1 = styled.h2`
    margin-top: 30px;
    text-align: center;
    color: black;
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-top: -10px;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`;

const StyledDiv = styled.div`
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 0 15px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 30px;

    @media (max-width: 768px) {
        margin-top: -100px;
    }

    @media (max-width: 480px) {
        margin-top: 80px;
    }
`;

const StyledButtonLink = styled(ButtonLink)`
    background-color: #FF8A2A;
    color: #fff;
    padding: 10px 20px;
    border-radius: 7px;
    border: none;
    margin-left: -50px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: rgb(255, 115, 0);
        transform: scale(1.05);
        color: #fff;
    }

    @media (max-width: 768px) {
        padding: 8px 18px;
        font-size: 0.9rem;
        
    }

    @media (max-width: 480px) {
        padding: 6px 16px;
        font-size: 0.8rem;
        margin-left: 0;
    }
`;

export default function NewProducts({ products }) {
    return (
        <StyledDiv>
            <Title1>Tap Tap Smart Products</Title1>
            <Title>New Arrivals</Title>
            <ProductsSlider products={products} />
            <ButtonContainer>
                <StyledButtonLink href="/products">Shop All</StyledButtonLink>
            </ButtonContainer>
        </StyledDiv>
    );
}
