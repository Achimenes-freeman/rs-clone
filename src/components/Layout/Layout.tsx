import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import classNames from 'classnames';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import styles from './style.module.scss';
import themes from '../../themes.module.scss';
import fonts from '../../fonts.module.scss';

import { PageContext } from '../../context/PageContext/PageContext';
import { getThemeVars, getFontVar } from '../../helpers/getVarsFuncs';

export function Layout() {
    const {theme, font} = useContext(PageContext) 
    const themeVars: string[][] = getThemeVars(theme);
    const fontVar = getFontVar(font);

    themeVars.forEach(themeVar => {
        document.documentElement.style.setProperty(themeVar[0], themeVar[1])
    })
    document.documentElement.style.setProperty(fontVar[0], fontVar[1])

    return (
        <div className={classNames(styles.Layout, themes[`${theme}Theme`], fonts[`${font}Font`])}>
            <div className={styles.layoutCont}>
                <Header />

                    <main className={styles.main}>
                        <Outlet />
                    </main>

                <Footer/>
            </div>
        </div>
    );
}
