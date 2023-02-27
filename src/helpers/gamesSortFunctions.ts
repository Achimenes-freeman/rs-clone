import { Game, UserInfo } from "../components/AccountPage/types";
import { SortMethod, SortType } from "../components/GamesList/types";

interface ChangeSortHelperProps {
    wpmState?: boolean, 
    wpmSort?: SortType, 
    accState?: boolean,
    accSort?: SortType,
    dateState?: boolean,
    dateSort?: SortType,
    currentSortMethod: SortMethod,
    setWpmSort: (value: React.SetStateAction<SortType>) => void, 
    setWpmState:  (value: React.SetStateAction<boolean>) => void, 
    setAccSort: (value: React.SetStateAction<SortType>) => void, 
    setAccState:  (value: React.SetStateAction<boolean>) => void, 
    setDateSort: (value: React.SetStateAction<SortType>) => void, 
    setDateState:  (value: React.SetStateAction<boolean>) => void, 
    setCurrentSortMethod: (value: React.SetStateAction<SortMethod>) => void,
    setCurrentSortType: (value: React.SetStateAction<SortType>) => void,
    sortGames: (method: SortMethod, type: SortType) => void
}
interface SortGamesProps {
    method: SortMethod, 
    type: SortType,
    userInfo: UserInfo,
    gameAmount: number,
    setGameList: React.Dispatch<React.SetStateAction<Game[]>>,
    setGameAmount: React.Dispatch<React.SetStateAction<number>>
}

export const changeSortToWpm = ({
    wpmState, wpmSort, 
    setWpmSort, setWpmState, 
    setAccSort, setAccState, 
    setDateSort, setDateState, 
    currentSortMethod, setCurrentSortMethod, 
    setCurrentSortType, sortGames}: ChangeSortHelperProps) => {
    if(wpmState) {
        if(wpmSort === 'low') {
            setWpmSort('high');
            setCurrentSortType('high');
            sortGames('wpm', 'high');
        } else {
            setWpmSort('low');
            setCurrentSortType('low');
            sortGames('wpm', 'low');
        }
    } else {
        if(currentSortMethod === 'acc') {
            setAccState(false);
            setAccSort('off');
        } else {
            setDateState(false);
            setDateSort('off');
        }
        setWpmState(true);
        setWpmSort('low');
        setCurrentSortMethod('wpm');
        setCurrentSortType('low');
        sortGames('wpm', 'low');
    }
}
export const changeSortToAcc = ({
    accState, accSort, 
    setWpmSort, setWpmState, 
    setAccSort, setAccState, 
    setDateSort, setDateState, 
    currentSortMethod, setCurrentSortMethod, 
    setCurrentSortType, sortGames}: ChangeSortHelperProps) => {
    if(accState) {
        if(accSort === 'low') {
            setAccSort('high');
            setCurrentSortType('high');
            sortGames('acc', 'high');
        } else {
            setAccSort('low');
            setCurrentSortType('low');
            sortGames('acc', 'low');
        }
    } else {
        if(currentSortMethod === 'wpm') {
            setWpmState(false);
            setWpmSort('off');
        } else {
            setDateState(false);
            setDateSort('off');
        }
        setAccState(true);
        setAccSort('low');
        setCurrentSortMethod('acc');
        setCurrentSortType('low');
        sortGames('acc', 'low');
    }
}
export const changeSortToDate = ({
    dateState, dateSort, 
    setWpmSort, setWpmState, 
    setAccSort, setAccState, 
    setDateSort, setDateState, 
    currentSortMethod, setCurrentSortMethod, 
    setCurrentSortType, sortGames}: ChangeSortHelperProps) => {
    if(dateState) {
        if(dateSort === 'low') {
            setDateSort('high');
            setCurrentSortType('high');
            sortGames('date', 'high');
        } else {
            setDateSort('low');
            setCurrentSortType('low');
            sortGames('date', 'low');
        }
    } else {
        if(currentSortMethod === 'wpm') {
            setWpmState(false);
            setWpmSort('off');
        } else {
            setAccState(false);
            setAccSort('off');
        }
        setDateState(true);
        setDateSort('low');
        setCurrentSortMethod('date');
        setCurrentSortType('low');
        sortGames('date', 'low');
    }
}

export const sortGamesFunc = ({method, type, userInfo, gameAmount, setGameList, setGameAmount}:SortGamesProps) => {
    switch(method) {
        case 'wpm':
            if(type === 'high') {
                setGameList([...userInfo.games].sort((gameA, gameB) => gameA.wpm - gameB.wpm).slice(0, gameAmount))
            } else {
                setGameList([...userInfo.games].sort((gameA, gameB) => gameB.wpm - gameA.wpm).slice(0, gameAmount))
            }
            setGameAmount(gameAmount)
            break;
        case 'acc':
            if(type === 'high') {
                setGameList([...userInfo.games].sort((gameA, gameB) => gameA.accuracy - gameB.accuracy).slice(0, gameAmount))
            } else {
                setGameList([...userInfo.games].sort((gameA, gameB) => gameB.accuracy - gameA.accuracy).slice(0, gameAmount))
            }
            setGameAmount(gameAmount)
            break;
        case 'date':
            if(type === 'high') {
                setGameList([...userInfo.games].sort((gameA, gameB) => gameA.time - gameB.time).slice(0, gameAmount))
            } else {
                setGameList([...userInfo.games].sort((gameA, gameB) => gameB.time - gameA.time).slice(0, gameAmount))
            }
            setGameAmount(gameAmount)
            break
        default: break;
    }
}