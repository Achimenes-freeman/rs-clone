/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext/MainContext';
import styles from './style.module.scss';

export const ModeBar = () => {

    const {mode, changeMode} = useContext(MainContext)


    return (
    <div className={styles.ModeBar}>
        <ul className={styles.modesList}>
            <li className={cn({[styles.modeActive]: mode === '15 seconds'}, styles.mode)} onClick={()=> changeMode('15 seconds')}>15 seconds</li>
            <li className={cn({[styles.modeActive]: mode === '30 seconds'}, styles.mode)} onClick={()=> changeMode('30 seconds')}>30 seconds</li>
            <li className={cn({[styles.modeActive]: mode === '60 seconds'}, styles.mode)} onClick={()=> changeMode('60 seconds')}>60 seconds</li>
            <li className={cn({[styles.modeActive]: mode === '120 seconds'}, styles.mode)} onClick={()=> changeMode('120 seconds')}>120 seconds</li>
        </ul>
    </div>
)}