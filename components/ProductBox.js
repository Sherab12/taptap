import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartIcon from "./icons/Cart";

const ProductWrapper = styled.div`
    width: 100%;
    padding: 10px;
`;

const WhiteBox = styled(Link)`
    background-color: #fee566;
    padding: 20px;
    height: 250px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 6px 6px lightgray;
    &:hover {
        box-shadow: 0 6px 6px lightslategray;
        transition: 0.3s;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        height: 200px;
        padding: 10px;
        margin-top: -100px;
        img {
            max-width: 80%;
            max-height: 80%;
            border-radius: 10px;
        }
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: 1rem;
    color: inherit;
    text-decoration: none;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;

const ProductInfoBox = styled.div`
    margin-top: 10px;
    text-align: center;
`;

const PriceRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const Price = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
    margin: 7px 0;
    color: #465b52;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export default function ProductBox({ _id, title, description, price, images }) {
    const { addProduct } = useContext(CartContext);
    const url = "/product/" + _id;

    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images[0]} alt="Product" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <PriceRow>
                    <Title href={url}>{title}</Title>
                    <Price>Nu.{price}</Price>
                    <Button onClick={() => addProduct(_id)} primary outline>
                        <CartIcon /> Add to cart
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
}
