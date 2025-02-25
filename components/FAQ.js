import { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 50px 20px;
    @media (max-width: 768px) {
        padding: 30px 15px;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 15px 0 20px;
    font-weight: normal;
    color: #B0B0B0;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const FAQTitle = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.8rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const FAQItem = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
`;

const Question = styled.div`
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 5px;
    line-height: 2rem;
    font-size: 1.2rem;
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 10px;
    }
`;

const Answer = styled.div`
    padding: 10px;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    line-height: 1.8rem;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Tap Tap Smart Business Card?",
            answer: "Tap Tap smart business card is a digital business card that uses NFC technology..."
        },
        {
            question: "How can I check if my phone supports NFC?",
            answer: "To see if your phone has NFC enabled, go to your settings and type 'NFC' in the search bar..."
        },
        {
            question: "What can I share on my profile?",
            answer: "Tap Tap smart cards make exchanging information effortless..."
        },
        {
            question: "What does NFC stand for?",
            answer: "NFC stands for Near Field Communication."
        },
        {
            question: "Can NFC card be rewritten?",
            answer: "Yes, NFC cards can be rewritten multiple times unless they are locked permanently."
        },
        {
            question: "How close do you have to be for NFC to work?",
            answer: "NFC typically works within a range of 4 cm or less."
        },
        {
            question: "What other services do you provide?",
            answer: "We offer a variety of digital business solutions, including customized NFC-enabled products."
        },
        {
            question: "How do I change my account email?",
            answer: "You can change your account email in the settings section of your Tap Tap account."
        }
    ];

    return (
        <FAQContainer>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
            <Title>Everything you need to know about the Tap Tap products and NFC.</Title>
            {faqs.map((faq, index) => (
                <FAQItem key={index}>
                    <Question onClick={() => toggleFAQ(index)}>
                        {faq.question} <span>{openIndex === index ? "−" : "+"}</span>
                    </Question>
                    <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
                </FAQItem>
            ))}
        </FAQContainer>
    );
};

export default FAQ;