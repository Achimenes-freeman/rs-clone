import styles from './styles.module.scss'
import { StatisticsCellProps } from './types'

export function StatisticsCell({name, value}: StatisticsCellProps) {
    return(
        <div className={styles.CellCont}>
            <h4 className={styles.cellName}>{name}</h4>
            <h2 className={styles.cellValue}>{value}</h2>
        </div>
    )
}