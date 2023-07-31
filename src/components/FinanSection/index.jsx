import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Value } from "./Value";
import styles from "./style.module.scss";

export const FinanSection = () =>{
    const obejctDefault = {
        description: "",
        value: "",
        type: "Entrada",
      };

    const [finanList, setFinanList] = useState(obejctDefault);
    const [itensFinanList, setItensFinanList] = useState([]);

    console.log(finanList);
    console.log(itensFinanList);

    return(
        <section>
            <div className="container">
                <div className={styles.finanSection}>
                    <div className={styles.formValueContainer}>
                        <Form finanList={finanList} setFinanList={setFinanList} itensFinanList={itensFinanList} setItensFinanList={setItensFinanList}/>
                        <Value itensFinanList={itensFinanList}/>
                    </div>
                    <List itensFinanList={itensFinanList} setItensFinanList={setItensFinanList}/>
                </div>
            </div>
        </section>
    )
}