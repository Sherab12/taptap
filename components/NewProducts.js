import styled from "styled-components";
import Center from "./Center";
import ProductsSlider from "./NewProductsGrid";
import ButtonLink from "./ButtonLink";

const Title = styled.h2`
    font-size: 1.7;
    margin: 15px 0 20px;
    font-weight: normal;
    color: #B0B0B0;
    text-align: center;
`;

const Title1 = styled.h2`
    margin: 20px 0 20px;
    text-align: center;
    color: black;
    font-size: 1.8rem;
    font-weight: bold;
`;

const StyledDiv = styled.div`
    max-width: 1200px;
    margin: 0 30px 0 0px;
    padding: 0 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20px;
`;

const StyledButtonLink = styled(ButtonLink)`
    background-color: #FF8A2A;
    color: #fff;
    padding: 10px 20px;
    border-radius: 7px;
    border-color: #ffff;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        background-color: rgb(255, 115, 0);
        transform: scale(1.05);
        color: #fff;
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
