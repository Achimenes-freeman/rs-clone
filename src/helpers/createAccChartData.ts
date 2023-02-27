import { UserInfo } from "../components/AccountPage/types";

export function createAccChartData(userInfo: UserInfo) {
    const chartDataMap: Map<string, number> = new Map()
    const wpmSortedGames = userInfo.games.sort((gameA, gameB) => gameA.wpm - gameB.wpm);

    const minWpm = wpmSortedGames[0].wpm.toString();
    const maxWpm = wpmSortedGames[wpmSortedGames.length - 1].wpm.toString();
    for(let i = +minWpm[0]; i <= +maxWpm[0]; i += 1) {
        const limit = `${i}0-${i}9`;
        chartDataMap.set(limit, 0);
    }

    userInfo.games.forEach(game => {
        const bottomLimit = game.wpm - (game.wpm % 10);
        const topLimit = bottomLimit + 9;
        const limit = `${bottomLimit}-${topLimit}`;
        const prevValue = chartDataMap.get(limit)
        if(prevValue !== undefined) {
            chartDataMap.set(limit, prevValue + 1)
        }
    })

    const testCountData: number[] = Array.from(chartDataMap.values());
    const testCountTopLimit = [...testCountData].sort((a, b) => b - a)[0] + 1;
    testCountData.push(testCountTopLimit)
    const limitsData: string[] = Array.from(chartDataMap.keys());

    return {testCountData, limitsData}
}