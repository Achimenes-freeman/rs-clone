import styles from './styles.module.scss'
import { getDay, getHoursString, getMinutesString, getMonth, getSecondsString, getYear } from '../../helpers/dateAndTimeTransformations';
import { UserInfoProps } from './types';

export function UserShortInfo({userInfo}: UserInfoProps) {

    const getJoinDate = () => {
        const dateCreation = new Date(userInfo.dateCreation);
        return `Joined ${getDay(dateCreation)} ${getMonth(dateCreation)} ${getYear(dateCreation)}`
    }
    const getTimeString = () => {
        const hh = getHoursString(userInfo.allTime)
        const mm = getMinutesString(userInfo.allTime)
        const ss = getSecondsString(userInfo.allTime)
        return `${hh}:${mm}:${ss}`
    }

    return (
        <div className={styles.UserCont}>
            <div className={styles.userNameAndDateCont}>
                <h2 className={styles.userName}>{userInfo.username}</h2>
                <h4 className={styles.userDate}>{getJoinDate()}</h4>
            </div>
            <div className={styles.separator}/>
            <div className={styles.userTotalInfoCont}>
                <div className={styles.userTotalInfoElem}>
                    <h4 className={styles.userTestHeading}>tests completed:</h4>
                    <h2 className={styles.userTestAmount}>{userInfo.gameCount}</h2>
                </div>
                <div className={styles.userTotalInfoElem}>
                    <h4 className={styles.userTestHeading}>time typing:</h4>
                    <h2 className={styles.userTestAmount}>{getTimeString()}</h2>
                </div>
            </div>
        </div>
    )
}