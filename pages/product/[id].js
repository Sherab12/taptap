import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/Cart";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext, useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
`;

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

const ImagesWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

const Thumbnails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    justify-content: space-between;
`;

const Thumbnail = styled.img`
    width: 80px;
    height: calc(100% / 3 - 8px); /* Dividing height evenly for 3 images */
    object-fit: cover;
    cursor: pointer;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;

    &:hover,
    &.active {
        border: 2px solid #000;
        transform: scale(1.1);
    }
`;

const MainImage = styled.img`
    width: 100%;
    max-width: 450px;
    height: 500px; /* Fixed height to match thumbnails */
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;


const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

const PriceRow = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Price = styled.span`
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
`;

const Description = styled.p`
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: justify; /* Justify text */
`;


const ButtonRow = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

export default function ProductPage({ product }) {
    const { addProduct } = useContext(CartContext);
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <>
            <Header />
            <PageWrapper>
                <ColWrapper>
                    <WhiteBox>
                        <ImagesWrapper>
                            <Thumbnails>
                                {product.images.map((img, index) => (
                                    <Thumbnail 
                                        key={index} 
                                        src={img} 
                                        onClick={() => setSelectedImage(img)} 
                                        className={selectedImage === img ? "active" : ""}
                                    />
                                ))}
                            </Thumbnails>
                            <MainImage src={selectedImage} />
                        </ImagesWrapper>
                    </WhiteBox>
                    <ProductDetails>
                        <Title>{product.title}</Title>
                        <Description>{product.description}</Description>
                        <PriceRow>
                            <Price>Nu. {product.price}</Price>
                        </PriceRow>
                        <ButtonRow>
                            <Button primary onClick={() => addProduct(product._id)}>
                                <CartIcon /> Add to Cart
                            </Button>
                            
                        </ButtonRow>
                    </ProductDetails>
                </ColWrapper>
            </PageWrapper>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
    };
}
