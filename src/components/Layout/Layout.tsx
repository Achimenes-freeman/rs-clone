import { Outlet } from 'react-router-dom';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

import styles from './style.module.scss';

export function Layout() {

    return (
        <div className={`${styles.Layout}`}>
            {/* <Header /> */}

            <main className={styles.main}>
                <Outlet />
            </main>

            {/* <Footer /> */}
        </div>
    );
}
