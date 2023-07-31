import logo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = () =>{
    return(
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerFlexBox}>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}