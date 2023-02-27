import { BarChartGeneric } from '../../generics/BarChartGeneric/BarChartGeneric'
import { createAccChartData } from '../../helpers/createAccChartData'
import { StatisticsTable } from '../StatisticsTable/StatisticsTable'
import styles from './styles.module.scss'
import { GamesInfoProps } from './types'

export function GamesInfo({userInfo}: GamesInfoProps) {
    const {testCountData, limitsData} = createAccChartData(userInfo)
    return (
        <div className={styles.GamesInfoCont}>
            <div className={styles.testWpmChart}>
                <BarChartGeneric infoData={testCountData} labelsData={limitsData}/>
            </div>
            <StatisticsTable userInfo={userInfo}/>
        </div>
    )
}