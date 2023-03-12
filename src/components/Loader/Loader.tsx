import styles from './styles.module.scss'

export function Loader() {
    return(
        <div className={styles.Loader}>
            <div className={styles.fakeHeader}>RStype</div>
            <div className={styles.fakeHeaderShort}>RSt</div>
            <div className={styles.clockLoader}/>
        </div>
    )
}