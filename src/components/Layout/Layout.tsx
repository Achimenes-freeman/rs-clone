import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import classNames from 'classnames';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import styles from './style.module.scss';
import themes from '../../themes.module.scss';
import fonts from '../../fonts.module.scss';

import { PageContext } from '../../context/PageContext/PageContext';

export function Layout() {
    const {theme, font} = useContext(PageContext) 

    return (
        <div className={classNames(styles.Layout, themes[`${theme}Theme`], fonts[`${font}Font`])}>
            <Header />

            <main className={styles.main}>
                <Outlet />
            </main>

            <Footer/>
        </div>
    );
}
