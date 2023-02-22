import cn from 'classnames';
import styles from './styles.module.scss';
import { SetGroupButProps } from './types';

export function SetGroupBut({isOpen, setIsOpen, children}: SetGroupButProps) {

    const toggleState = () => {
        setIsOpen(!isOpen)
    }

    return(
        <button className={styles.setGroupBut} onClick={toggleState} type="button" id="behavior">
                <span className={cn({[styles.openGroup]: isOpen},
                    {[styles.closeGroup]: !isOpen},
                    styles.setGroupButArrow)}/>
                {children}
        </button>
    )
}