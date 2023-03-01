import cn from 'classnames'
import styles from './styles.module.scss'
import { RatingRowProps } from "./types";

export function RatingRow({username = 'name', position = '#', wpm = 'wpm', acc = 'accuracy', mode="mode", date = 'date', bg}: RatingRowProps) {
    return (
        <div className={cn(styles.Row, {[styles.bg]: bg})}>
            <div className={cn(styles.info, 
                {[styles.position]: position !== '#'}, 
                {[styles.colored]: position !== '#'})}>{position}</div>
            <div className={cn(styles.info, 
                {[styles.colored]: position !== '#'}, 
                {[styles.top1]: position === '1'})}>{username}</div>
            <div className={cn(styles.info, 
                {[styles.colored]: position !== '#'})}>{wpm}</div>
            <div className={cn(styles.info, 
                {[styles.colored]: position !== '#'})}>{acc}</div>
            <div className={cn(styles.info, 
                {[styles.colored]: position !== '#'})}>{mode}</div>
            <div className={cn(styles.info,
                {[styles.colored]: position !== '#'}, 
                {[styles.date]: date !== 'date'})}>{date.split('/').map(item => <span key={Math.random()}>{item}</span>)}</div>
        </div>
    )
}