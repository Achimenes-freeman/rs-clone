import styles from './styles.module.scss'
import { StatisticsTableProps } from './types'
import { StatisticsCell } from '../../generics/StatisticsCell/StatisticsCell'
import { createStatisticsData } from '../../helpers/createStatisticsData'

export function StatisticsTable({userInfo}: StatisticsTableProps) {
    const dataArr = createStatisticsData(userInfo);
    
    return (
        <div className={styles.StatisticsCont}>
            {dataArr.map(data => <StatisticsCell name={data.name} value={data.value} />)}
        </div>
    )
}