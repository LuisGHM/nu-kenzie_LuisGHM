import styles from "./style.module.scss";

export const Value = ({ itensFinanList }) => {
    const totalValue = itensFinanList.reduce((accumulator, currentValue) => {
      if (currentValue.type === "Entrada") {
        return accumulator + Number(currentValue.value);
      } else if (currentValue.type === "Despesa") {
        return accumulator - Number(currentValue.value);
      } else {
        return accumulator;
      }
    }, 0);
  
    return (
      <div className={styles.valueContainer}>
        <div className={styles.valueSubContainer}>
          <h3 className={`title3`}>valor total:</h3>
          <span className="title3 pink">{totalValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
        </div>
        <p className="text">O valor se refere ao saldo</p>
      </div>
    );
};
  
  