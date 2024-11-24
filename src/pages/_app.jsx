import Footer from "@/components/Footer/Footer";
import "../../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/Header/Header";

export default function Myapp({ Component, pageProps }) {
    return (<>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>)

}