export type TWord = Array<string>;
export type TWordsData = Array<TWord>;

export interface IMainContext {
    wordsList: TWordsData;
    typedList: TWordsData;
    isFinished: boolean;
    mode: string;
    changeWordsList: (oldWordsList: TWordsData) => void;
    changeTypedList: (newTypedList: TWordsData) => void;
    makeEmptyTypedList: () => void;
    changeFinished: (value?:boolean)=> void;
    changeMode: (newMode: string)=> void;
}
