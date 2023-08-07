import { InputForm } from "./InputForm";
import styles from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ finanList, setFinanList, itensFinanList, setItensFinanList }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setFinanList({ ...finanList, type: selectedValue });
  };

  const submit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(), 
      description: finanList.description,
      value: finanList.value,
      type: finanList.type,
    };
    console.log(newTransaction);
    setItensFinanList([...itensFinanList, newTransaction]);
    setFinanList({
      description: "",
      value: "",
      type: "Entrada",
    });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <InputForm
        label={"Descricao"}
        type={"text"}
        placeholder={"Digite aqui sua descricao"}
        subText={"Exemplo: Compra de roupas"}
        typeFor={"description"}
        value={finanList.description}
        setFinanList={setFinanList}
        finanList={finanList}
      />
      <InputForm
        min={1}
        label={"Valor (R$)"}
        type={"number"}
        placeholder={"1"}
        typeFor={"value"}
        value={finanList.value}
        setFinanList={setFinanList}
        finanList={finanList}
      />
      <div>
        <select className={`${styles.selectOne} select`} name="" id="" value={finanList.type} onChange={handleSelectChange}>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button className="btn-medium" type="submit">Inserir valor</button>
    </form>
  );
};
