import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../context/MainContext/MainContext';
import { TestContext } from '../../context/TestContext/TestContext';
import { Keyboard } from '../../generics/Keybord/Keyboard';
import { Crown } from '../../generics/Crown/Crown';
import { InfoIcon } from '../../generics/InfoIcon/InfoIcon';
import { Gear } from '../../generics/Gear/Gear';
import { UserIcon } from '../../generics/UserIcon/UserIcon';
import { Logout } from '../../generics/Logout/Logout';
import styles from './style.module.scss'
import { PageContext } from '../../context/PageContext/PageContext';

export const Header = ()=> {

    const { makeEmptyTypedList ,changeFinished, changeWordsList,wordsList: wordsData} = useContext(MainContext);
    const {token, setLoaded, updateUsername, updateToken} = useContext(PageContext)

    const { 
        resetTestContext
    } = useContext(TestContext)

    const restartGame = () => {
        changeWordsList([...wordsData]);
        makeEmptyTypedList()
        resetTestContext();
        changeFinished(true)
    }

    const logOut = () => {
        restartGame()
        updateToken('');
        updateUsername('');
        setLoaded(false)
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
    }
    
    return (
        <header className={styles.Header}>
                <nav className={styles.nav}>
                    <div className={styles.leftNav}>
                        <Link to='/rs-clone/' className={styles.logo} onClick={restartGame}>
                            <h1>RStype</h1>
                            <h1>RSt</h1>
                        </Link>
                        <Link to='/rs-clone/' onClick={restartGame}>
                            <Keyboard />
                        </Link>
                        <Link to='/rs-clone/rating' onClick={restartGame}>
                            <Crown />
                        </Link>
                        <Link to='/rs-clone/info' onClick={restartGame}>
                            <InfoIcon />
                        </Link>
                        <Link to='/rs-clone/settings' onClick={restartGame}>
                            <Gear />
                        </Link>
                    </div>
                    <div className={styles.rightNav}>
                        <Link to='/rs-clone/user' onClick={restartGame}>
                            <UserIcon/>
                        </Link>
                        {!!token && 
                            <Link to='/rs-clone/' onClick={logOut}>
                                <Logout/>
                            </Link>
                        }
                    </div>
                </nav>
        </header>
    )
} 