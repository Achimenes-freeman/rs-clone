import { useState } from "react"
import { useNavigate } from "react-router-dom";
import cn from 'classnames'
import styles from './styles.module.scss'
import { tryLogin } from "../../helpers/regLogFunctions";

export function LoginBlock() {
    const navigate = useNavigate()
    const [nameState, setNameState] = useState('');
    const [nameErrorState, setNameErrorState] = useState(false);
    const [passState, setPassState] = useState('');
    const [passErrorState, setPassErrorState] = useState(false);
    const [showError, setShowError] = useState(false)

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameState(event.target.value);
        if(showError) {setShowError(false)}
        if(nameErrorState) {setNameErrorState(false)}
    }
    const passChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassState(event.target.value);
        if(showError) {setShowError(false)};
        if(passErrorState) {setPassErrorState(false)}
    }

    const validateInputs = () => {
        if(nameState.length < 4) {
            setNameErrorState(true)
            if(passState.length < 6) {
                setPassErrorState(true)
                return false
            }
            return false
        }
        if(passState.length < 6) {
            setPassErrorState(true)
            return false
        }
        return true
    }
    const login = () => {
        if(validateInputs()) {
            tryLogin(nameState, passState).then(() => {
                navigate('/')
            }).catch(() => {
                setShowError(true)
            })
        }
    }

    return (
        <>
            <input className={cn(styles.input, styles.inputName)} 
                type="text" 
                placeholder="username" 
                value={nameState} 
                onChange={nameChange}
                minLength={4} maxLength={10}/>
            {nameErrorState && <span className={styles.nameSpan}>Enter username(minLength = 4, maxLength = 10)</span>}
            <input className={cn(styles.input, styles.inputPass)} 
                type="password" 
                placeholder="password" 
                value={passState} 
                onChange={passChange}
                minLength={6} maxLength={10}/>
            {passErrorState && <span className={styles.passSpan}>Enter password(minLength = 6, maxLength = 10)</span>}
            {showError && <span className={styles.errorSpan}>Incorrect username or password!</span>}
            <button className={styles.loginButt} type="button" onClick={() => login()}>login</button>
        </>
    )
}