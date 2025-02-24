import { CartContextProvider } from "@/components/CartContext";
import Link from "next/link";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  body{
    background-color: white;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
