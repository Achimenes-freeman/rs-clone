export const getDay = (date: Date) => {
    const dayNum = date.getDate()
    if(dayNum < 10) {
        return 0 + dayNum.toString()
    }
    return dayNum.toString();
}
export const getMonth = (date: Date) => {
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
export const getYear = (date: Date) => date.getFullYear().toString()

export const getHoursString = (time: number) => {
    const hh = Math.floor(time / 3600)
    if(hh < 10) {
        return `0${hh}`
    }
    return hh.toString()
}

export const getMinutesString = (time: number) => {
    const mm = Math.floor((time % 3600) / 60);
    if(mm < 10) {
        return `0${mm}`
    }
    return mm.toString()
}

export const getSecondsString = (time: number) => {
    const ss = (time % 3600) % 60
    if(ss < 10) {
        return `0${ss}`
    }
    return ss.toString()
} 