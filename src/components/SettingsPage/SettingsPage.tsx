import cn from 'classnames'
import styles from './styles.module.scss';
import themes from '../../themes.module.scss';
import fonts from '../../fonts.module.scss';
import { SettingsNav } from '../SettingsNav/SettingsNav';
import { SettingsList } from '../SettingsList/SettingsList';
import { SettingsInterface } from '../../helpers/defaultSettings';

export function SettingsPage () {
    const settings: SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'null')

    return (
        <section className={cn(styles.SettingsPage, themes[`${settings.theme.theme}Theme`], fonts[`${settings.appearance.fontFamily}Font`])}>
            <SettingsNav/>
            <SettingsList/>
        </section>
    )
}