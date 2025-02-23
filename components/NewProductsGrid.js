import styled from "styled-components";
import ProductBox from "./ProductBox";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: auto;
    margin-top: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: -10px;
    }
`;

const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 520px;
    overflow: hidden;
    padding-left: 0;
    width: 100%;
`;

const SliderTrack = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${({ translateValue }) => `translateX(${translateValue}px)`};
`;

const ProductItem = styled.div`
    flex: 0 0 ${({ productWidth }) => productWidth}px;
    transition: transform 0.5s ease, opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 0;
    ${({ active }) =>
        active
            ? `transform: scale(1.1); opacity: 1; z-index: 2;`
            : `transform: scale(0.9); opacity: 0.5;`}
    @media (max-width: 768px) {
        margin-right: -10px;
    }
`;

const ArrowButton = styled.button`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

const LeftArrow = styled(ArrowButton)`
    margin-right: 10px;
    @media (max-width: 768px) {
        margin-top: -150px;
    }

`;

const RightArrow = styled(ArrowButton)`
    margin-left: 10px;
    @media (max-width: 768px) {
        margin-top: -150px;
    }
`;

export default function ProductsSlider({ products }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [productWidth, setProductWidth] = useState(330); // Default width

    // Adjust product width based on screen size
    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth <= 768) {
                setProductWidth(300); // One product at a time
            } else {
                setProductWidth(330); // Three products at a time
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <SliderContainer>
            <LeftArrow onClick={prevSlide}><FiChevronLeft size={24} /></LeftArrow>
            <ProductsWrapper>
                <SliderTrack translateValue={-(activeIndex * productWidth - productWidth)}>
                    {products.map((product, index) => (
                        <ProductItem key={product._id} active={index === activeIndex} productWidth={productWidth}>
                            <ProductBox {...product} />
                        </ProductItem>
                    ))}
                </SliderTrack>
            </ProductsWrapper>
            <RightArrow onClick={nextSlide}><FiChevronRight size={24} /></RightArrow>
        </SliderContainer>
    );
}
