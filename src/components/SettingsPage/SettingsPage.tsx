import cn from 'classnames'
import styles from './styles.module.scss';
import { SettingsNav } from '../SettingsNav/SettingsNav';
import { SettingsList } from '../SettingsList/SettingsList';

export function SettingsPage () {

    return (
        <section className={cn(styles.SettingsPage)}>
            <SettingsNav/>
            <SettingsList/>
        </section>
    )
}