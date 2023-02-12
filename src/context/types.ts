export type TWord = Array<string>;
export type TWordsData = Array<TWord>;

export interface IMainContext {
    wordsList: TWordsData;
    typedList: TWordsData;
    timer: number;
    changeWordsList: (oldWordsList: TWordsData) => void;
    changeTypedList: (newTypedList: TWordsData) => void;
    makeEmptyTypedList: () => void;
    changeTimer: (number?: number) => void;
}
