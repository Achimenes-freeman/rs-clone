import styles from './style.module.scss'
import RSSchoolIcon from '../../assets/icons/rs_school_js.svg'

export const Footer = ()=> 
    (
        <footer className={styles.Footer}>
            <a rel='noreferrer' target='_blank' href="https://github.com/Achimenes-freeman" className={styles.link}>Ahimenes-freeman</a>
            <a rel='noreferrer' target='_blank' href="https://github.com/iSvitka" className={styles.link}>iSvitko</a>
            <a rel='noreferrer' target='_blank' href="https://github.com/grom0330" className={styles.link}>grom0330</a>
            <a rel='noreferrer' target='_blank' href="https://rs.school/js/" className={styles.rss}>
                <img src={RSSchoolIcon} alt="link to RSSschool"/>
            </a>
            <p>2023</p>
        </footer>
    )