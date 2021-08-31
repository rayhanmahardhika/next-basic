import Footer from "../Footer";
import Header from "../Header";

export default function Layout(props) {
    const {content} = props
    return (
        <div>
            <Header/>
            <div>{content}</div>
            <Footer/>
        </div>
    )
}
