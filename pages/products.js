import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const StyledDiv =  styled.div`
    max-width: 1200px;
    margin-top: 110px;
    padding: 0 20px;
`;

export default function ProductPage({products}){
    return(
        <>
            <Header />
                <StyledDiv>
                    <center><Title>All Products</Title></center> 
                    <ProductsGrid products={products} />
                </StyledDiv>
            <Footer />
        </>
    );
}

export async function getServerSideProps(){
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return {props:{
        products: JSON.parse(JSON.stringify(products)),
    }};
}