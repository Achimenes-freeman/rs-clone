import { UserInfo } from "../components/AccountPage/types";
import { StatisticsCellProps } from "../generics/StatisticsCell/types";
import { getTimeString } from "./dateAndTimeTransformations";

export const createStatisticsData = (userInfo: UserInfo): StatisticsCellProps[] => {
    const testsAmount = userInfo.gameCount.toString();
    const timeTyping = getTimeString(userInfo);
    const highestWpm = userInfo.games
        .sort((gameA, gameB) => gameB.wpm - gameA.wpm)[0].wpm.toString();
    const avgWpm = Math.round(userInfo.games
        .reduce((sum, game) => sum + game.wpm, 0) / userInfo.gameCount).toString();
    const highestAcc = `${userInfo.games
        .sort((gameA, gameB) => gameB.accuracy - gameA.accuracy)[0].accuracy}%`;
    const avgAcc = `${Math.round(userInfo.games
        .reduce((sum, game) => sum + game.accuracy, 0) / userInfo.gameCount)}%`;

    return [
        {name: 'test completed', value: testsAmount},
        {name: 'time typing', value: timeTyping},
        {name: 'highest wpm', value: highestWpm},
        {name: 'average wpm', value: avgWpm},
        {name: 'highest accuracy', value: highestAcc},
        {name: 'average accuracy', value: avgAcc},
    ];
}