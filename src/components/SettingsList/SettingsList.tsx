import cn from 'classnames';
import styles from './styles.module.scss';
import { SettingBehavior } from '../SettingBehavior/SettingBehavior';
import { SettingSound } from '../SettingSound/SettingSound';
import { SettingCaret } from '../SettingCaret/SettingCaret';
import { SettingAppearance } from '../SettingAppearance/SettingAppearance';
import { SettingTheme } from '../SettingTheme/SettingTheme';
import { SettingDangerZone } from '../SettingDangerZone/SettingDangerZone';

export function SettingsList() {
    return(
        <div className={styles.settingsList}>
            <ul className={cn(styles.settingsListContent, styles.List)}>
                <li className={styles.ListElem}><SettingBehavior/></li>
                <li className={styles.ListElem}><SettingSound/></li>
                <li className={styles.ListElem}><SettingCaret/></li>
                <li className={styles.ListElem}><SettingAppearance/></li>
                <li className={styles.ListElem}><SettingTheme/></li>
                <li className={styles.ListElem}><SettingDangerZone/></li>
            </ul>
        </div>
    )
} 