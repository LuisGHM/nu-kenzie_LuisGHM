import styles from "./style.module.scss";

export const InputForm = ({label, type, placeholder, subText, min, value, setFinanList, finanList, typeFor}) =>{
    return(
        <div className={styles.labels}>
            <label htmlFor="" className="text">{label}</label>
            <input required className={`${styles.input} input-text`} type={type} placeholder={placeholder} min={min} value={value} onChange={(e) => setFinanList({ ...finanList, [typeFor]: e.target.value })} />
            <p className={`text grey`}>{subText}</p>
        </div>
    )
}