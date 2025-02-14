import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const StyledDiv = styled.div`
    max-width: 1200px;
    margin: 110px auto 0;
    padding: 0 20px;
    text-align: center;
`;

const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
`;

const ScrollButton = styled.button`
    background: #333;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    ${({ left }) => left && "left: 5px;"}
    ${({ right }) => right && "right: 5px;"}
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    &:hover {
        background: #555;
    }
`;

const CategorySlider = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    width: 78%;
    scrollbar-width: none;
    scroll-behavior: smooth;
    padding: 10px 50px;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CategoryButton = styled.button`
    flex: 0 0 auto;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    background: ${({ active }) => (active ? "#FEE566" : "#FF8A2A")};
    color: ${({ active }) => (active ? "#000" : "#FFF")};
    &:hover {
        background: #FEE566;
    }
`;

export default function ProductPage({ products, categories, selectedCategory }) {
    const router = useRouter();
    const sliderRef = useRef(null);
    const [showArrows, setShowArrows] = useState(false);

    useEffect(() => {
        if (sliderRef.current) {
            setShowArrows(sliderRef.current.scrollWidth > sliderRef.current.clientWidth);
        }
    }, [categories]);

    const handleCategoryClick = (categoryId) => {
        router.push(categoryId ? `/products?category=${categoryId}` : `/products`);
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 200;
            sliderRef.current.scrollBy({ 
                left: direction === "left" ? -scrollAmount : scrollAmount, 
                behavior: "smooth" 
            });
        }
    };

    return (
        <>
            <Header />
            <StyledDiv>
                <CategoryWrapper>
                    <ScrollButton left show={showArrows} onClick={() => scroll("left")}>
                        <ChevronLeft size={20} />
                    </ScrollButton>
                    <CategorySlider ref={sliderRef}>
                        <CategoryButton 
                            onClick={() => handleCategoryClick(null)} 
                            active={!selectedCategory}
                        >
                            All Products
                        </CategoryButton>
                        {categories?.map((category) => (
                            <CategoryButton 
                                key={category._id} 
                                onClick={() => handleCategoryClick(category._id)}
                                active={selectedCategory === category._id}
                            >
                                {category.name}
                            </CategoryButton>
                        ))}
                    </CategorySlider>
                    <ScrollButton right show={showArrows} onClick={() => scroll("right")}>
                        <ChevronRight size={20} />
                    </ScrollButton>
                </CategoryWrapper>
                <Title>{selectedCategory ? categories.find(cat => cat._id === selectedCategory)?.name : "All Products"}</Title>
                <ProductsGrid products={products} />
            </StyledDiv>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { category } = context.query;  
    const categoryFilter = category ? { category } : {};  

    const products = await Product.find(categoryFilter, null, { sort: { '_id': -1 } });
    const categories = await Category.find();  

    return { 
        props: {
            products: JSON.parse(JSON.stringify(products)),
            categories: categories ? JSON.parse(JSON.stringify(categories)) : [], 
            selectedCategory: category || null  
        } 
    };
}