import { Card } from "./Card";
import styles from "./style.module.scss";


export const List = ({itensFinanList, setItensFinanList}) =>{
    const deleteFin = (card) => {
        console.log(card);
        const newList = itensFinanList.filter((fin) => fin.id !== card.id);
        console.log(newList);
        setItensFinanList(newList);
      };
      

    return(
        <div className={styles.listContainer}>
            <h1 className="title3">Resumo financeiro</h1>
            <ul className={styles.ulListContainer}>
                {itensFinanList.length === 0 ? <p className="title2">Você ainda não possui nenhum lançamento</p> : 
                    itensFinanList.map(iten => (
                        <Card key={iten.description} iten={iten} deleteFin={deleteFin} itensFinanList={itensFinanList} />
                    ))
                }
            </ul>
        </div>
    )
}