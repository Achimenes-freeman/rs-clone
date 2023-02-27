import { useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { LoginBlock } from '../LoginBlock/LoginBlock';
import { RegistrationBlock } from '../RegistrationBlock/RegistrationBlock';

export function RegLogPage() {
    const [logState, setLogState] = useState(true);
    const [regState, setRegState] = useState(false);

    const changeType = () => {
        setLogState(!logState);
        setRegState(!regState);
    }

    return (
        <div className={styles.RegLogPage}>
            <div className={styles.regLogCont}>
                <button 
                    type='button' 
                    className={cn(styles.typeButton, 
                    styles.logButt,
                    {[styles.active]: logState}, 
                    {[styles.disabledLeft]: regState})}
                    onClick={() => changeType()}
                >login</button>
                <button 
                    type='button' 
                    className={cn(styles.typeButton, 
                    styles.regButt,
                    {[styles.active]: regState}, 
                    {[styles.disabledRight]: logState})}
                    onClick={() => changeType()}
                >register</button>
                <div className={cn(styles.inputsCont, {[styles.inputActiveLeft]: logState}, {[styles.inputActiveRight]: regState})}>
                    {logState && <LoginBlock />}
                    {regState && <RegistrationBlock />}
                </div>
            </div>
        </div>
    )
}