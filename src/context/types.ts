export type TWord = Array<string>
export type TWordsData = Array<TWord>

export interface IMainContext {
    wordsList: TWordsData;
    typedList: TWordsData;
    allClicks: number;
    wrongClicks: number;
    changeWordsList: (wordslist: TWordsData)=> void;
    changeTypedList: (newTypedList: TWordsData)=> void;
    makeEmptyTypedList: ()=> void;
} 