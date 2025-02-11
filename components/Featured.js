import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #e3e6f3;
    color:#222;
    padding: 50px 0;
    height: 250px;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:3rem;
`;
const Desc = styled.p`
    color:black;
    font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
`;
const Column = styled.div`
    display: flex;
    align-items: center;
    .ss{
        max-width:100%;
        height: 200px;
    }
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;
const Ig = styled.p`
    position: absolute;
    margin-left: 70px;
`;
export default function Featured({product}){
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(product?._id);
    }
    
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>Journey Into the Past</Title>
                            <Desc>Find Traditional Items That Tell Stories Online</Desc><br></br>
                            {/* <ButtonsWrapper>
                            <ButtonLink href={`/products/${product?._id}`} outline={1} white={1}>Read more</ButtonLink>
                                <Button white onclick={addFeaturedToCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper> */}
                            
                            <Ig>Shop now</Ig> 
                            <img  src="/image/button.png"/>
                        </div>
                    </Column>
                    <Column>
                        <img className="ss" src="https://gyencha.s3.amazonaws.com/1685434933780.jpg"/>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}