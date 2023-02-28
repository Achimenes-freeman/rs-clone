import cn from 'classnames'
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { SettingsNav } from '../SettingsNav/SettingsNav';
import { SettingsList } from '../SettingsList/SettingsList';

export function SettingsPage () {

    useEffect(()=>{
        document.onkeydown = null
    },[])

    return (
        <section className={cn(styles.SettingsPage)}>
            <SettingsNav/>
            <SettingsList/>
        </section>
    )
}