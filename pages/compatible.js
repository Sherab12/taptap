import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DeviceCompatibilityList from "@/components/Compatible";

export default function compatiblePage(){
    // const {data:session} = useSession();
    
    // function handleSignout(){
    //   signOut();
    // }
    return(
        <div>
            <Header />
            <DeviceCompatibilityList />
            <Footer />
        </div>
        );
}