import styles from './styles.module.scss'
import { BestGameInfoCell } from "../../generics/BestGameInfoCell/BestGameInfoCell";
import { TableProps } from "./types";

export function BestGamesInfoTable({type, games}: TableProps) {
    let cellNamesArr: string[] = []
    if(type === 'seconds') {
        cellNamesArr = ['15', '30', '60', '120']
    } else {
        cellNamesArr = ['10', '20', '50', '100']
    }
    
    return (
        <div className={styles.BestGamesInfoCont}>
            {games?.length
            ? games.sort((gameA, gameB) => {
                if(parseInt(gameA.mode, 10) < parseInt(gameB.mode, 10)) {
                    return -1
                } 
                return 1
            }
            ).map(game => <BestGameInfoCell name={game.mode} wpm={game.wpm} acc={game.accuracy}/>)
            :<>
                <BestGameInfoCell name={`${cellNamesArr[0]} ${type}`}/>
                <BestGameInfoCell name={`${cellNamesArr[1]} ${type}`}/>
                <BestGameInfoCell name={`${cellNamesArr[2]} ${type}`}/>
                <BestGameInfoCell name={`${cellNamesArr[3]} ${type}`}/>
            </>}
        </div>
    )
}