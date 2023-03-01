import styles from './styles.module.scss'
import { CellProps } from './types'

export function BestGameInfoCell({name = '', wpm = 0, acc = 0}: CellProps) {
    return (
        <div className={styles.CellCont}>
            <h4 className={styles.cellName}>{name}</h4>
            <span className={styles.cellWpm}>{wpm || '-'}</span>
            <span className={styles.cellAcc}>{acc || '-'}{!!acc && '%'}</span>
        </div>
    )
}