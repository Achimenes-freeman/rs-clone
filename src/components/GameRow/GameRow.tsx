import cn from 'classnames'
import styles from './styles.module.scss';
import { GameRowProps } from "./types";
import { createGameData } from '../../helpers/createGameDate';

export function GameRow({gameInfo, bg}: GameRowProps) {
    const {wpmString, accString, charsString, modeString, dateString} = createGameData(gameInfo);

    return(
        <div className={cn(styles.GameCont, {[styles.bg]: !bg})}>
            <div className={styles.gameInfo}>{wpmString}</div>
            <div className={styles.gameInfo}>{accString}</div>
            <div className={styles.gameInfo}>{charsString}</div>
            <div className={styles.gameInfo}>{modeString}</div>
            <div className={styles.gameInfo}><span>{dateString.split('/')[0]}</span><span>{dateString.split('/')[1]}</span></div>
        </div>
    )
}