import styled from "styled-components";
import ProductBox from "./ProductBox";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SliderContainer = styled.div`
    position: relative;
    width: 1100px;
    margin: auto;
    margin-top: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 520px;
    overflow: hidden;
    padding-left: 120px;
    width: 100%;
`;

const SliderTrack = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${({ translateValue }) => `translateX(${translateValue}px)`};
`;

const ProductItem = styled.div`
    flex: 0 0 300px; /* Fixed width */
    transition: transform 0.5s ease, opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    ${({ active }) =>
        active
            ? `transform: scale(1.2); opacity: 1; z-index: 2;`
            : `transform: scale(0.9); opacity: 0.5;`}
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
    margin-right: 20px;
    margin-bottom: 40px;
`;

const RightArrow = styled(ArrowButton)`
    margin-left: 20px;
    margin-bottom: 40px;
`;

export default function ProductsSlider({ products }) {
    const productWidth = 330; // Product width + gap
    const [activeIndex, setActiveIndex] = useState(1); // Start with the second product centered

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
                        <ProductItem key={product._id} active={index === activeIndex}>
                            <ProductBox {...product} />
                        </ProductItem>
                    ))}
                </SliderTrack>
            </ProductsWrapper>
            <RightArrow onClick={nextSlide}><FiChevronRight size={24} /></RightArrow>
        </SliderContainer>
    );
}
