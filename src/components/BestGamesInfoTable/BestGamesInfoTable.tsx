import styles from './styles.module.scss'
import { Game } from '../AccountPage/types'
import { BestGameInfoCell } from "../../generics/BestGameInfoCell/BestGameInfoCell";
import { TableProps } from "./types";

export function BestGamesInfoTable({type, games}: TableProps) {
    let cellNamesArr: string[] = []
    if(type === 'seconds') {
        cellNamesArr = ['15', '30', '60', '120']
    } else {
        cellNamesArr = ['10', '25', '50', '100']
    }
    
    const gameMap: Map<string, Game | undefined> = new Map()
    cellNamesArr.forEach(cell => {
        gameMap.set(cell, games?.find(game => {
            if(parseInt(game.mode, 10).toString() === cell) {
                return true
            }
            return false
        }) || undefined)
    })
    

    return (
        <div className={styles.BestGamesInfoCont}>
            {
                Array.from(gameMap.entries()).map(game => {
                    if(game[1]) {
                        return <BestGameInfoCell name={game[1].mode} wpm={game[1].wpm} acc={game[1].accuracy} key={Math.random()}/> 
                    }
                    return <BestGameInfoCell name={`${game[0]} ${type}`} key={Math.random()}/>
                })
            }
        </div>
    )
}