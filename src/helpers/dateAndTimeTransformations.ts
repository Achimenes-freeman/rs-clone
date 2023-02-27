import { UserInfo } from "../components/AccountPage/types";

const getDay = (date: Date) => {
    const dayNum = date.getDate()
    if(dayNum < 10) {
        return 0 + dayNum.toString()
    }
    return dayNum.toString();
}
const getMonth = (date: Date) => {
    const month: number = date.getMonth();
    switch(month) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
        default: 
            return 'Jan';
    }
}
const getYear = (date: Date) => date.getFullYear().toString()
export const getJoinDate = (userInfo: UserInfo) => {
    const dateCreation = new Date(userInfo.dateCreation);
    return `Joined ${getDay(dateCreation)} ${getMonth(dateCreation)} ${getYear(dateCreation)}`
}


const getHoursString = (time: number) => {
    const hh = Math.floor(time / 3600)
    if(hh < 10) {
        return `0${hh}`
    }
    return hh.toString()
}
const getMinutesString = (time: number) => {
    const mm = Math.floor((time % 3600) / 60);
    if(mm < 10) {
        return `0${mm}`
    }
    return mm.toString()
}
const getSecondsString = (time: number) => {
    const ss = (time % 3600) % 60
    if(ss < 10) {
        return `0${ss}`
    }
    return ss.toString()
} 
export const getTimeString = (userInfo: UserInfo) => {
    const hh = getHoursString(userInfo.allTime)
    const mm = getMinutesString(userInfo.allTime)
    const ss = getSecondsString(userInfo.allTime)
    return `${hh}:${mm}:${ss}`
}