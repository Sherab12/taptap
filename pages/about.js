// import AboutPage from "@/components/About";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";

// export default function About(){
//     return(
//         <>
//         <Header />
//             <AboutPage />
//         <Footer />
//         </>
//     );
// }
import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutPage from "@/components/About";

export default function About(){
    return(
        <>
        <Header />
            <AboutPage />
            <ContactPage />
        <Footer />
        </>
    );
}