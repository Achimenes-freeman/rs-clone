import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { IMainContext, TWordsData } from './types';
import wordsData from '../../developData/words.json';
import { shuffler } from '../../helpers/helpers';

export const MainContext = createContext<IMainContext>({
    wordsList: [],
    typedList: [],
    isFinished: false,
    changeWordsList: () => {},
    changeTypedList: () => {},
    makeEmptyTypedList: () => {},
    changeFinished: ()=> {}
});

export const MainContextProvider = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const [wordsList, setWordsList] = useState<TWordsData>([[]]);
    const [typedList, setTypedList] = useState<TWordsData>([[]]);
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        setWordsList(shuffler(wordsData.map((word) => word.split(''))));
    }, []);

    const changeWordsList = useCallback((oldWordsList: TWordsData) => {
        setWordsList([...shuffler(oldWordsList)]);
    }, []);

    const changeTypedList = useCallback((newTypedList: TWordsData) => {
        setTypedList(newTypedList);
    }, []);

    const makeEmptyTypedList = useCallback(() => {
        setTypedList([[]]);
    }, []);

    const changeFinished = useCallback(()=>{
        setIsFinished(prev => !prev)
    },[]) 

    const context: IMainContext = useMemo(
        () => ({
            wordsList,
            typedList,
            isFinished,
            changeWordsList,
            changeTypedList,
            makeEmptyTypedList,
            changeFinished,
        }),
        [
            wordsList,
            typedList,
            isFinished,
            changeWordsList,
            changeTypedList,
            makeEmptyTypedList,
            changeFinished
        ]
    );

    return (
        <MainContext.Provider value={context}>{children}</MainContext.Provider>
    );
};
