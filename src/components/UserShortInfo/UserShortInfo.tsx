import styles from './styles.module.scss'
import { getJoinDate, getTimeString } from '../../helpers/dateAndTimeTransformations';
import { UserInfoProps } from './types';

export function UserShortInfo({userInfo}: UserInfoProps) {

    const dateString = getJoinDate(userInfo);
    const timeString = getTimeString(userInfo)

    return (
        <div className={styles.UserCont}>
            <div className={styles.userNameAndDateCont}>
                <h2 className={styles.userName}>{userInfo.username}</h2>
                <h4 className={styles.userDate}>{dateString}</h4>
            </div>
            <div className={styles.separator}/>
            <div className={styles.userTotalInfoCont}>
                <div className={styles.userTotalInfoElem}>
                    <h4 className={styles.userTestHeading}>tests completed:</h4>
                    <h2 className={styles.userTestAmount}>{userInfo.gameCount}</h2>
                </div>
                <div className={styles.userTotalInfoElem}>
                    <h4 className={styles.userTestHeading}>time typing:</h4>
                    <h2 className={styles.userTestAmount}>{timeString}</h2>
                </div>
            </div>
        </div>
    )
}