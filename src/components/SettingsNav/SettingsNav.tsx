import cn from 'classnames'
import styles from './styles.module.scss';

export function SettingsNav() {
    return (
        <nav className={styles.settingsNavigation}>
            <ul className={cn(styles.settingsNavigationContent, styles.Navigation)}>
                <li className={styles.NavigationLink}><a href="#behavior">behavior</a></li>
                <li className={styles.NavigationLink}><a href="#sound">sound</a></li>
                <li className={styles.NavigationLink}><a href="#caret">caret</a></li>
                <li className={styles.NavigationLink}><a href="#appearance">appearance</a></li>
                <li className={styles.NavigationLink}><a href="#theme">theme</a></li>
                <li className={styles.NavigationLink}><a href="#dangerZone">danger zone</a></li>
            </ul>
        </nav>
    )
}