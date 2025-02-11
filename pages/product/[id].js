import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/cart";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    margin-top: 40px;
`;
const PriceRow = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
`;
const Price = styled.span`
    font-size: 1.4rem;
`;

export default function Productpage({product}){
    const {addProduct} = useContext(CartContext);
    return(
        <>
            <Header />
            <Center>
                <ColWrapper>
                <WhiteBox>
                    <ProductImages images={product.images}/>
                </WhiteBox>
                <div>
                    <Title>{product.title}</Title>
                    <p>{product.description}</p>
                    <PriceRow>
                        <div><Price>Nu.{product.price}</Price></div>
                        <div><Button primary onClick={() => addProduct(product._id)}><CartIcon />Add to cart</Button></div>
                    </PriceRow>
                </div>                
                </ColWrapper>
            </Center>
            
            <Footer />
        </>
    )
}

export async function getServerSideProps(context){
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return{
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}