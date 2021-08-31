// pemanggilan tipe props
import { ReactNode } from "react";
// pemanggilan komponen
import Footer from "../Footer";
import Header from "../Header";
// pemanggilan style
import styles from "./Layout.module.css"

// karena pakai TypeScript maka harus di definisikan tipe props nya *dan harus children namanya 
interface LayoutProps {
    children: ReactNode
}

// implementasi TypeScript pada props di deklarasi fungsi
export default function Layout(props: LayoutProps) {
    const {children} = props
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </div>
    )
}
