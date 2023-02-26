import { StatisticsTable } from '../StatisticsTable/StatisticsTable'
import styles from './styles.module.scss'
import { GamesInfoProps } from './types'

export function GamesInfo({userInfo}: GamesInfoProps) {
    


    return (
        <div className={styles.GamesInfoCont}>
            <div className={styles.testWpmChart}>
                TestWpmChart
            </div>
            <StatisticsTable userInfo={userInfo}/>
        </div>
    )
}