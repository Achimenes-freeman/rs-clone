import { Game } from "../components/AccountPage/types";
import { getDay, getHoursString, getMinutesString, getMonth, getYear } from "./dateAndTimeTransformations";

export function createGameData(gameInfo: Game) {
    const wpmString = gameInfo.wpm.toString();
    const accString = `${gameInfo.accuracy}%`;
    const charsString = gameInfo.chars.join('/');
    const modeString = `${gameInfo.mode.includes('seconds') ? 'time' : 'words'} ${parseInt(gameInfo.mode, 10)}`;
    const dateString = `${getDay(new Date(gameInfo.time))} ${getMonth(new Date(gameInfo.time))} ${getYear(new Date(gameInfo.time))}/${getHoursString(gameInfo.time)}:${getMinutesString(gameInfo.time)}`

    return {wpmString, accString, charsString, modeString, dateString}
}