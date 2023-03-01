import styles from './style.module.scss'
import { RSSIcon } from '../../generics/RSSIcon/RSSIcon'

export const Footer = ()=> 
    (
        <footer className={styles.Footer}>
            <div className={styles.gitHubCont}>
                <a rel='noreferrer' target='_blank' href="https://github.com/Achimenes-freeman" className={styles.link}>Achimenes-freeman</a>
                <a rel='noreferrer' target='_blank' href="https://github.com/iSvitka" className={styles.link}>iSvitka</a>
                <a rel='noreferrer' target='_blank' href="https://github.com/grom0330" className={styles.link}>grom0330</a>
            </div>
            <div className={styles.rssCont}>
                <a rel='noreferrer' target='_blank' href="https://rs.school/js/" className={styles.rss}>
                    <RSSIcon />
                </a>
                <span className={styles.year}>2023</span>
            </div>
        </footer>
    )