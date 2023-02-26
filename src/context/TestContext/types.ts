export interface ITestContextData {
    allClicks:number;
    wrongClicks:number;
    mode: string ,
    printsDynamics: Array<number>,
    accuracy:number,
    wpm: number,
    chars: Array<number>
}

export interface ITestContext {
    testContext: ITestContextData,
    resetTestContext: ()=>void
};