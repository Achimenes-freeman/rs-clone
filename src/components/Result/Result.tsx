import classNames from 'classnames';
import {useContext, useEffect} from 'react';

import { LineChartGeneric } from '../../generics/LineChartGeneric/LineChartGeneric';
import { ISetGameResultData } from './types';
import { setGameResultData } from '../../helpers/setGameResultData';

import { MainContext } from "../../context/MainContext/MainContext"
import { TestContext } from '../../context/TestContext/TestContext';
import styles from './style.module.scss'
import { getMainColor, getSubAltColor } from '../../helpers/getMainColor';

export const Result = ()=> {

    const { changeFinished, changeWordsList, makeEmptyTypedList, wordsList: wordsData, mode} = useContext(MainContext);

    const { 
        testContext:{ allClicks, wrongClicks, accuracy, wpm, printsDynamics},
        resetTestContext
    } = useContext(TestContext)

    const restartGame = () => {
        resetTestContext();
        changeWordsList([...wordsData]);
        makeEmptyTypedList()
        changeFinished()
    }

    useEffect(()=>{
        resetTestContext()
        document.onkeydown = null
    },[resetTestContext])

    const gameResultData: ISetGameResultData = {
        wpm,
        accuracy,
        chars: [allClicks - wrongClicks, wrongClicks,0,0],
        mode,
        time: parseInt(mode, 10)
    }

    useEffect(()=> {
        setGameResultData(gameResultData)
    }, [])

    return(
        <div className={styles.ResultComponent}>

            <div className={styles.chartBox}>
                <LineChartGeneric printsDynamics={printsDynamics} chartColor={getSubAltColor()} color={getMainColor()}/>
            </div>

            <div className={styles.resultsBox}>
                <div className={styles.result}><span className={styles.resultTitle}>wpm</span><span className={styles.resultValue}>{wpm}</span></div>
                <div className={styles.result}><span className={styles.resultTitle}>accuracy</span><span className={styles.resultValue}>{accuracy}%</span></div>
                <div className={styles.result}><span className={styles.resultTitle}>mode</span><span className={classNames(styles.resultValue, styles.smallValue)}>{mode}</span></div>
            </div>

            <button className={styles.restartBtn} type="button" onClick={restartGame}>Restart</button>
        </div>
    )
        
    
}