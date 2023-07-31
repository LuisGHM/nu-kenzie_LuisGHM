import styles from "./style.module.scss";

export const Card = ({iten, deleteFin }) => {
  const formattedValue = Number(iten.value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <li className={`${styles.cardContainer} ${iten.type == "Entrada" ? styles.entrada: ""}`}>
        <div className={styles.nameTypeContainer}>
            <h3 className="title3">{iten.description}</h3>
            <p className="text">{iten.type}</p>
        </div>
        <div className={styles.valueBtnContainer}>
            <span className="text">{formattedValue}</span>
            <button className={`${styles.button} btn-small`} onClick={() => deleteFin(iten.description)}>Excluir</button>
        </div>
    </li>
  );
};
