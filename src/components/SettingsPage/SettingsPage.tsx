import cn from 'classnames'
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { SettingsNav } from '../SettingsNav/SettingsNav';
import { SettingsList } from '../SettingsList/SettingsList';
import { AnimationContextProvider } from '../../context/AnimationContext/AnimationContext';

export function SettingsPage () {

    useEffect(()=>{
        document.onkeydown = null
    },[])

    return (
        <AnimationContextProvider>
            <section className={cn(styles.SettingsPage)}>
                <SettingsNav/>
                <SettingsList/>
            </section>
        </AnimationContextProvider>
    )
}