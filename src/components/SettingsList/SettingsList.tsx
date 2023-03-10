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
                <li className={styles.ListElem} id='behavior'><SettingBehavior/></li>
                <li className={styles.ListElem} id='sound'><SettingSound/></li>
                <li className={styles.ListElem} id='caret'><SettingCaret/></li>
                <li className={styles.ListElem} id='appearance'><SettingAppearance/></li>
                <li className={styles.ListElem} id='theme'><SettingTheme/></li>
                <li className={styles.ListElem} id='dangerZone'><SettingDangerZone/></li>
            </ul>
        </div>
    )
} 