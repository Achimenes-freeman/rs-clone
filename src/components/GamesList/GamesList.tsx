import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss'
import { GamesListProps, SortMethod, SortType } from "./types";
import { GameRow } from '../GameRow/GameRow';
import { changeSortToAcc, changeSortToDate, changeSortToWpm, sortGamesFunc } from '../../helpers/gamesSortFunctions';

export function GamesList({userInfo}: GamesListProps) {
    const [gameAmount, setGameAmount] = useState(userInfo.gameCount < 10 ? userInfo.gameCount : 10);
    const [gameList, setGameList] = useState([...userInfo.games].sort((gameA, gameB) => new Date(gameB.date).valueOf() - new Date(gameA.date).valueOf()).slice(0, gameAmount));
    const [wpmState, setWpmState] = useState(false);
    const [wpmSort, setWpmSort] = useState<SortType>('off');
    const [accState, setAccState] = useState(false)
    const [accSort, setAccSort] = useState<SortType>('off')
    const [dateState, setDateState] = useState(true)
    const [dateSort, setDateSort] = useState<SortType>('low')
    const [currentSortMethod, setCurrentSortMethod] = useState<SortMethod>('date');
    const [currentSortType, setCurrentSortType] = useState<SortType>('low');

    const sortGames = (method: SortMethod, type: SortType, amount?: number) => {
        if(amount) {
            sortGamesFunc({ method, type, userInfo, gameAmount: amount, setGameList, setGameAmount })
        } else {
            sortGamesFunc({ method, type, userInfo, gameAmount, setGameList, setGameAmount })
        }
    }
    const changeSortMethod = (sortMethod: SortMethod) => {
        switch(sortMethod) {
            case 'wpm': 
                changeSortToWpm({ wpmState, wpmSort, setWpmSort, setWpmState, setAccSort, setAccState, setDateSort, setDateState, currentSortMethod, setCurrentSortMethod, setCurrentSortType, sortGames })
                break;
            case 'acc':
                changeSortToAcc({ accState, accSort, setWpmSort, setWpmState, setAccSort, setAccState, setDateSort, setDateState, currentSortMethod, setCurrentSortMethod, setCurrentSortType, sortGames })
                break;
            case 'date':
                changeSortToDate({ dateState, dateSort, setWpmSort, setWpmState, setAccSort, setAccState, setDateSort, setDateState, currentSortMethod, setCurrentSortMethod, setCurrentSortType, sortGames })
            break;
            default: break;
        }
    }
    const addGamesToList = () => {
        if(userInfo.gameCount - gameAmount > 10) {
            sortGames(currentSortMethod, currentSortType, gameAmount + 10)
        } else {
            sortGames(currentSortMethod, currentSortType, userInfo.gameCount)
        }
    }

    useEffect(() => {

    }, []) 
    return (
        <div className={styles.GameListCont}>
            <div className={styles.headRow}>
                <button 
                    type='button' 
                    className={cn(styles.headInfo, styles.headButt)}
                    onClick={() => changeSortMethod('wpm')}
                    ><span>wpm</span>{wpmState ? wpmSort === 'low' && '▼' || wpmSort === 'high' && '▲' : null}</button>
                <button 
                    type='button' 
                    className={cn(styles.headInfo, styles.headButt)}
                    onClick={() => changeSortMethod('acc')}
                    ><span>accuracy</span>{accState ? accSort === 'low' && '▼' || accSort === 'high' && '▲' : null}</button>
                <div className={styles.headInfo}>chars</div>
                <div className={styles.headInfo}>mode</div>
                <button 
                    type='button' 
                    className={cn(styles.headInfo, styles.headButt)}
                    onClick={() => changeSortMethod('date')}
                    ><span>date</span>{dateState ? dateSort === 'low' && '▼' || dateSort === 'high' && '▲' : null}</button>
            </div>
            {gameList.map((game, index) => <GameRow gameInfo={game} bg={index % 2} key={Math.random()}/>)}
            {gameAmount !== userInfo.gameCount
            ? <button className={styles.loadButt} type='button' onClick={() => addGamesToList()}>Load more</button>
            : null}
        </div>
    )
}